package cmd

import (
	"fmt"

	"github.com/charmbracelet/lipgloss"
	"github.com/spf13/cobra"
)

var aboutCmd = &cobra.Command{
	Use:   "about",
	Short: "Display information about NobleCraft",
	Long:  `Show detailed information about the NobleCraft application, including version and features`,
	Run: func(cmd *cobra.Command, args []string) {
		displayAbout()
	},
}

func displayAbout() {
	titleStyle := lipgloss.NewStyle().
		Bold(true).
		Foreground(lipgloss.Color("#7D56F4")).
		Padding(1, 2)

	infoStyle := lipgloss.NewStyle().
		Foreground(lipgloss.Color("#FAFAFA")).
		Padding(0, 2)

	featureStyle := lipgloss.NewStyle().
		Foreground(lipgloss.Color("#04B575")).
		Padding(0, 4)

	boxStyle := lipgloss.NewStyle().
		Border(lipgloss.RoundedBorder()).
		BorderForeground(lipgloss.Color("#7D56F4")).
		Padding(1, 2).
		Width(60)

	content := titleStyle.Render("✨ NobleCraft ✨") + "\n\n" +
		infoStyle.Render("Version: 1.0.0") + "\n" +
		infoStyle.Render("Author: Divanshu") + "\n" +
		infoStyle.Render("Repository: github.com/divanshu-go/NobleCraft") + "\n\n" +
		infoStyle.Render("A beautiful command-line interface application with an") + "\n" +
		infoStyle.Render("interactive TUI built using Go.") + "\n\n" +
		titleStyle.Render("Features:") + "\n" +
		featureStyle.Render("• Interactive menu system") + "\n" +
		featureStyle.Render("• Beautiful terminal UI with colors") + "\n" +
		featureStyle.Render("• Easy-to-use commands") + "\n" +
		featureStyle.Render("• Extensible architecture") + "\n" +
		featureStyle.Render("• Built with Cobra, Bubble Tea & Lipgloss") + "\n"

	fmt.Println(boxStyle.Render(content))
}
