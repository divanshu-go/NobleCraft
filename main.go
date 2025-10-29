package main

import (
	"fmt"
	"os"
)

func main() {
	if len(os.Args) < 2 {
		printHelp()
		return
	}

	command := os.Args[1]

	switch command {
	case "hello":
		fmt.Println("Hello from NobleCraft!")
	case "version":
		fmt.Println("NobleCraft v1.0.0")
	case "help":
		printHelp()
	default:
		fmt.Printf("Unknown command: %s\n", command)
		printHelp()
	}
}

func printHelp() {
	fmt.Println("NobleCraft - A simple CLI tool")
	fmt.Println("\nUsage:")
	fmt.Println("  noblecraft <command>")
	fmt.Println("\nCommands:")
	fmt.Println("  hello    - Print a greeting")
	fmt.Println("  version  - Show version")
	fmt.Println("  help     - Show this help")
}
