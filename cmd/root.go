package cmd

import (
	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "noblecraft",
	Short: "NobleCraft - A beautiful CLI application",
	Long: `NobleCraft is a command-line interface application with an interactive TUI.
It provides an intuitive and visually appealing way to interact with your projects.`,
	Run: func(cmd *cobra.Command, args []string) {
		// If no subcommand is provided, show the interactive TUI
		if len(args) == 0 {
			RunInteractive()
		}
	},
}

func Execute() error {
	return rootCmd.Execute()
}

func init() {
	rootCmd.CompletionOptions.DisableDefaultCmd = true
	rootCmd.AddCommand(interactiveCmd)
	rootCmd.AddCommand(aboutCmd)
}
