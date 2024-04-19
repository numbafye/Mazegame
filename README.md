# Maze Game Adventure

## Description

Maze Game Adventure is a thrilling browser-based game where players navigate through complex mazes to escape Paradise. The game features multiple levels, each with increasing difficulty and different traps. Players must use their mouse to control their movement through the maze, avoiding obstacles and trying to reach the finish line as quickly as possible.

![Gameplay GIF](path/to/gameplay.gif) *(Replace "path/to/gameplay.gif" with the actual path to your GIF)*

## Demo

A live demo of Maze Game Adventure can be found here: [Maze Game Adventure Live Demo](https://example.com)

## Technologies

This project is built using the following technologies:
- HTML5
- CSS3 (with SCSS for better styling capabilities)
- JavaScript
- Bootstrap 5 for responsive design

## Technical Information

### Setup and Installation

**Frontend:**
1. Clone the repository to your local machine using `git clone https://github.com/yourusername/mazegame.git`
2. Navigate to the project directory.
3. Open the `index.html` file in a web browser to start the game.

**SCSS Compilation:**
- Ensure you have Node.js installed.
- Run `npm install -g sass` to install Sass globally.
- Compile SCSS to CSS using `sass --watch scss/main.scss:css/style.css`.

### Coding Standards

This project adheres to common coding standards and best practices, including:
- Consistent naming conventions
- Modular architecture for CSS and JavaScript
- Comprehensive commenting in code to explain logic

### Contributing

To contribute to Maze Game Adventure, please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b your-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the original branch: `git push origin your-branch-name`.
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## Issues

Current known issues:
- Sometimes the maze borders may not render correctly on smaller screens.

Future enhancements:
- Adding more levels and complexity to the mazes.
- Implementing a mobile-first design approach.

## Changelog

Refer to the `CHANGELOG.md` in this repository for detailed information about the changes and version releases.

## API Documentation

The Maze Game provides a simple API to interact with game settings:

### Reference

- detectCollision("finish"): Stops the game and shows the game over screen.


