# NobleCraft

✨ A beautiful command-line interface application with an interactive TUI built using Go.

## Features

- 🎨 **Beautiful TUI** - Stunning terminal user interface with colors and styling
- 🎯 **Interactive Menu** - Easy-to-navigate menu system with keyboard controls
- ⚡ **Fast & Lightweight** - Built with Go for optimal performance
- 🛠️ **Extensible** - Clean architecture ready for expansion
- 📦 **Modern Stack** - Built with Cobra, Bubble Tea, and Lipgloss

## Installation

### Prerequisites

- Go 1.20 or higher

### Build from Source

```bash
# Clone the repository
git clone https://github.com/divanshu-go/NobleCraft.git
cd NobleCraft

# Build the application
go build -o noblecraft .

# Run the application
./noblecraft
```

### Install using Go

```bash
go install github.com/divanshu-go/NobleCraft@latest
```

## Usage

### Interactive Mode

Launch the interactive TUI with a beautiful menu:

```bash
# Direct launch (default behavior)
./noblecraft

# Or explicitly use the interactive command
./noblecraft interactive
```

**Navigation:**
- `↑/↓` or `k/j` - Move cursor up/down
- `Enter` or `Space` - Select option
- `q` or `Ctrl+C` - Quit

### Commands

#### About

Display information about NobleCraft:

```bash
./noblecraft about
```

#### Help

Show help information:

```bash
./noblecraft help
```

## Menu Options

When running in interactive mode, you can choose from:

1. **About NobleCraft** - Learn more about the application
2. **Project Info** - View project details and statistics
3. **Settings** - Configure application settings (coming soon)
4. **Help** - Get help and documentation
5. **Exit** - Close the application

## Technologies Used

- **[Cobra](https://github.com/spf13/cobra)** - CLI framework for Go
- **[Bubble Tea](https://github.com/charmbracelet/bubbletea)** - Terminal UI framework
- **[Lipgloss](https://github.com/charmbracelet/lipgloss)** - Style definitions for terminal output

## Development

### Project Structure

```
NobleCraft/
├── main.go           # Application entry point
├── cmd/              # Command implementations
│   ├── root.go       # Root command and CLI setup
│   ├── interactive.go# Interactive TUI implementation
│   └── about.go      # About command
├── go.mod            # Go module definition
├── go.sum            # Go dependencies
└── README.md         # This file
```

### Building

```bash
go build -o noblecraft .
```

### Running Tests

```bash
go test ./...
```

### Code Formatting

```bash
go fmt ./...
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Divanshu**
- GitHub: [@divanshu-go](https://github.com/divanshu-go)

## Acknowledgments

- Charm.sh for the amazing TUI libraries
- The Go community for excellent tooling
