package cmd

import (
	"fmt"
	"os"

	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
	"github.com/spf13/cobra"
)

var interactiveCmd = &cobra.Command{
	Use:   "interactive",
	Short: "Launch interactive TUI mode",
	Long:  `Start the NobleCraft interactive terminal user interface`,
	Run: func(cmd *cobra.Command, args []string) {
		RunInteractive()
	},
}

type menuItem struct {
	title       string
	description string
}

type model struct {
	choices  []menuItem
	cursor   int
	selected map[int]struct{}
	quitting bool
}

func initialModel() model {
	return model{
		choices: []menuItem{
			{title: "About NobleCraft", description: "Learn more about this application"},
			{title: "Project Info", description: "View project details and statistics"},
			{title: "Settings", description: "Configure application settings"},
			{title: "Help", description: "Get help and documentation"},
			{title: "Exit", description: "Close the application"},
		},
		selected: make(map[int]struct{}),
	}
}

func (m model) Init() tea.Cmd {
	return nil
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.String() {
		case "ctrl+c", "q":
			m.quitting = true
			return m, tea.Quit

		case "up", "k":
			if m.cursor > 0 {
				m.cursor--
			}

		case "down", "j":
			if m.cursor < len(m.choices)-1 {
				m.cursor++
			}

		case "enter", " ":
			if m.cursor == len(m.choices)-1 {
				// Exit option selected
				m.quitting = true
				return m, tea.Quit
			}
			_, ok := m.selected[m.cursor]
			if ok {
				delete(m.selected, m.cursor)
			} else {
				m.selected[m.cursor] = struct{}{}
			}
			// Execute the selected option
			return m, m.executeOption()
		}
	}

	return m, nil
}

func (m model) executeOption() tea.Cmd {
	return func() tea.Msg {
		switch m.cursor {
		case 0: // About
			showAbout()
		case 1: // Project Info
			showProjectInfo()
		case 2: // Settings
			showSettings()
		case 3: // Help
			showHelp()
		}
		return nil
	}
}

func (m model) View() string {
	if m.quitting {
		return ""
	}

	// Styles
	titleStyle := lipgloss.NewStyle().
		Bold(true).
		Foreground(lipgloss.Color("#7D56F4")).
		Background(lipgloss.Color("#1a1a1a")).
		Padding(0, 1).
		MarginBottom(1)

	headerStyle := lipgloss.NewStyle().
		Bold(true).
		Foreground(lipgloss.Color("#FAFAFA")).
		Background(lipgloss.Color("#7D56F4")).
		Padding(0, 1).
		Width(60)

	selectedStyle := lipgloss.NewStyle().
		Foreground(lipgloss.Color("#7D56F4")).
		Background(lipgloss.Color("#3a3a3a")).
		Padding(0, 1).
		Width(58)

	normalStyle := lipgloss.NewStyle().
		Foreground(lipgloss.Color("#FAFAFA")).
		Padding(0, 1).
		Width(58)

	descStyle := lipgloss.NewStyle().
		Foreground(lipgloss.Color("#888888")).
		Italic(true).
		PaddingLeft(3)

	footerStyle := lipgloss.NewStyle().
		Foreground(lipgloss.Color("#888888")).
		Italic(true).
		MarginTop(1)

	// Build the UI
	s := titleStyle.Render("╔════════════════════════════════════════════════════════════╗") + "\n"
	s += headerStyle.Render("           ✨ NOBLECRAFT INTERACTIVE MENU ✨              ") + "\n"
	s += titleStyle.Render("╚════════════════════════════════════════════════════════════╝") + "\n\n"

	for i, choice := range m.choices {
		cursor := "  "
		if m.cursor == i {
			cursor = "▶ "
		}

		checked := " "
		if _, ok := m.selected[i]; ok {
			checked = "✓"
		}

		title := cursor + checked + " " + choice.title
		if m.cursor == i {
			s += selectedStyle.Render(title) + "\n"
		} else {
			s += normalStyle.Render(title) + "\n"
		}

		if m.cursor == i {
			s += descStyle.Render(choice.description) + "\n"
		}
		s += "\n"
	}

	s += footerStyle.Render("↑/↓ or k/j: Navigate • Enter: Select • q/Ctrl+C: Quit") + "\n"

	return s
}

func showAbout() {
	style := lipgloss.NewStyle().
		Bold(true).
		Foreground(lipgloss.Color("#7D56F4")).
		Padding(1, 2).
		Border(lipgloss.RoundedBorder()).
		BorderForeground(lipgloss.Color("#7D56F4"))

	content := style.Render(`
NobleCraft - A Beautiful CLI Application

Version: 1.0.0
Author: Divanshu
Description: An elegant command-line tool with 
             an interactive TUI built with Go

Features:
  • Interactive menu system
  • Beautiful terminal UI
  • Easy-to-use commands
  • Extensible architecture
`)
	fmt.Println(content)
	fmt.Println("\nPress Enter to continue...")
	fmt.Scanln()
}

func showProjectInfo() {
	style := lipgloss.NewStyle().
		Foreground(lipgloss.Color("#04B575")).
		Padding(1, 2).
		Border(lipgloss.RoundedBorder()).
		BorderForeground(lipgloss.Color("#04B575"))

	content := style.Render(`
Project Information

Repository: github.com/divanshu-go/NobleCraft
Language: Go
Framework: Cobra + Bubble Tea
UI Library: Lipgloss

Status: Active Development
`)
	fmt.Println(content)
	fmt.Println("\nPress Enter to continue...")
	fmt.Scanln()
}

func showSettings() {
	style := lipgloss.NewStyle().
		Foreground(lipgloss.Color("#FF8800")).
		Padding(1, 2).
		Border(lipgloss.RoundedBorder()).
		BorderForeground(lipgloss.Color("#FF8800"))

	content := style.Render(`
Settings

Currently, there are no configurable settings.
This feature is coming soon!

Future settings:
  • Theme customization
  • Color schemes
  • Default behaviors
`)
	fmt.Println(content)
	fmt.Println("\nPress Enter to continue...")
	fmt.Scanln()
}

func showHelp() {
	style := lipgloss.NewStyle().
		Foreground(lipgloss.Color("#00BFFF")).
		Padding(1, 2).
		Border(lipgloss.RoundedBorder()).
		BorderForeground(lipgloss.Color("#00BFFF"))

	content := style.Render(`
Help & Documentation

Commands:
  noblecraft           - Launch interactive mode
  noblecraft interactive - Launch interactive mode
  noblecraft about     - Show about information
  noblecraft help      - Show help information

Navigation:
  ↑/↓ or k/j - Move cursor up/down
  Enter      - Select option
  q/Ctrl+C   - Quit application

For more information, visit:
github.com/divanshu-go/NobleCraft
`)
	fmt.Println(content)
	fmt.Println("\nPress Enter to continue...")
	fmt.Scanln()
}

func RunInteractive() {
	p := tea.NewProgram(initialModel())
	if _, err := p.Run(); err != nil {
		fmt.Printf("Error running program: %v", err)
		os.Exit(1)
	}
}
