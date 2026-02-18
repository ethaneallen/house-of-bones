# House of Bones 🎲

A modern, interactive web app for scoring **Dominoes** games with beautiful UI and intuitive gameplay.

## Demo

Visit [House of Bones](https://example.com) to play!

## Features

✨ **Beautiful Design**
- Clean, modern interface with smooth animations
- Responsive layout works on desktop and mobile
- Customizable color theme

🎮 **Game Features**
- Support for 2-6 players
- Incremental scoring visualization using "dominoes houses"
- Points tracked in increments of 5
- Undo functionality for the last 5 points
- Customizable target score to win
- Real-time winner detection with celebration banner

📱 **Mobile-Friendly**
- Progressive Web App (PWA) support
- Touch-optimized interface
- Works offline (with manifest.json)
- Installable as native app on mobile devices

⚙️ **Easy Setup**
- No installation required
- Single HTML file with embedded CSS and JavaScript
- Works in any modern web browser

## How to Play

1. **Start a Game**: Click "New Game" to set up players
2. **Configure Match**: 
   - Enter the number of players (2-6)
   - Set the target points to win
   - Enter player names (optional)
3. **Add Points**: Click on a player's score area to add 5 points
4. **Undo Points**: Use the "Undo 5 pts" button to remove the last 5 points
5. **Win**: First player to reach the target score wins!

## Scoring System

Points are displayed as visual "dominoes houses" that represent domino tile markings:
- **5 pts** - Center vertical line
- **10 pts** - Center vertical + horizontal lines
- **15 pts** - Add top-left mark (slash)
- **20 pts** - Add top-left mark (circle)
- **25 pts** - Add top-right mark (slash)
- **30 pts** - Add top-right mark (circle)
- **35 pts** - Add bottom-left mark (slash)
- **40 pts** - Add bottom-left mark (circle)
- **45 pts** - Add bottom-right mark (slash)
- **50 pts** - Add bottom-right mark (circle)

Each domino house represents up to 50 points, making it easy to see scores at a glance.

## Installation

### Option 1: Direct Use
Simply open `domino-house-score.html` in any modern web browser.

### Option 2: Host on Web Server
Copy the HTML file to your web server and serve it:

```bash
# Example with Python
python -m http.server 8000

# Example with Node.js
npx serve
```

### Option 3: PWA Installation
- Open in a modern browser
- Click the "Install" option (Chrome, Edge, etc.)
- Add to home screen for direct access

## File Structure

```
.
├── domino-house-score.html    # Main application (all-in-one file)
├── manifest.json              # PWA manifest (optional)
└── README.md                  # This file
```

## Browser Compatibility

Works on all modern browsers:
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5** - Semantic markup and SVG graphics
- **CSS3** - Modern styling with gradients, flexbox, and grid
- **Vanilla JavaScript** - No framework dependencies
- **Web Fonts** - Google Fonts (Cabin Sketch, Work Sans)

## Customization

You can customize the app by editing the CSS variables at the top of the `<style>` section:

```css
:root {
    --ink: #1c1f2e;           /* Dark text color */
    --accent: #ff6b4a;        /* Primary accent color */
    --accent-2: #27b3a4;      /* Secondary accent (winner) */
    --sun: #ffe177;           /* Highlight color */
    --paper: #fffdf7;         /* Background color */
    --card: #ffffff;          /* Card background */
    --line: #d8dce9;          /* Border color */
    --shadow: rgba(...);      /* Shadow color */
}
```

## Features Roadmap

- [ ] Game history/statistics
- [ ] Score verification system
- [ ] Two-player domino variant support
- [ ] Sound effects
- [ ] Dark mode theme
- [ ] Score export (CSV/PDF)
- [ ] Multi-language support

## License

MIT License - Feel free to use, modify, and distribute this project.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Acknowledgments

Inspired by the classic game of Dominoes and "House of Bones" scoring variant. Designed with love for domino enthusiasts everywhere! 🎲

---

Made with ❤️ for domino players
