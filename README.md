# React Calendar App

A responsive calendar application built with React 19, Vite, and Tailwind CSS.

## Features

- **Fast and Responsive**: Loads instantly and works smoothly on all devices.
- **Event Conflicts**: Displays conflict in events when scheduled on same day.
- **Lazy Loading**: Loads current month events first for speed, then prefetches adjacent months for a seamless experience.
- **Modern UI**: Clean, accessible, and mobile-friendly design.
- **Colorful Event Tags**: Events are color-coded for easy identification.
- **Sidebar**: See all events for the selected day in a dedicated sidebar.
- **Navigation**: Quickly jump between months and years, or return to today with one click.

## Benefits

- **Time Efficient**: Only loads what you need, so you never wait for unnecessary data.
- **Easy to Use**: Simple, intuitive interface anyone can use.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:1504](http://localhost:1504) to see the app.

## Tech Stack
- React 19
- Vite
- Tailwind CSS
- date-fns

## How It Works
- The app loads events for the current month first, so you see your schedule instantly.
- It prefetches events for the previous and next months in the background for smooth navigation.
- The sidebar shows all events for the selected day, with color tags for clarity.

## Customization
- You can easily add new features or change the look by editing the components in the `src/components/Calendar` folder.
- Events are stored in `public/events.json` for easy editing.

## License
This project is open source and free to use.
