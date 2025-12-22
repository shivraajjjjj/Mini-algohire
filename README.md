# Mini-Hire 

A modern, responsive job listing and management application built with React and Vite. Browse job opportunities, filter by your preferences, and save your favorite positions for later review.

## Features

- **Browse Job Listings**: View a comprehensive list of internships and full-time positions
- **Advanced Filtering**: Filter jobs by:
  - Search term (role or company name)
  - Location (Remote, Bangalore, Delhi, Hyderabad, Pune, Mumbai, Jaipur)
  - Job type (Internship or Full-time)
  - Minimum stipend/salary
- **Save Jobs**: Bookmark your favorite job postings for easy access
- **Persistent Storage**: Saved jobs are stored in local storage and persist across sessions
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Clean UI**: Modern interface with Tailwind CSS styling

## Tech Stack

- **React** (v19.2.0) - UI library
- **React Router DOM** (v7.11.0) - Client-side routing
- **Vite** (v7.2.4) - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting and quality

## Prerequisites

Before running this project, make sure you have:

- Node.js (version 14 or higher)
- npm package manager

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shivraajjjjj/Mini-algohire
cd Mini-algohire/Frontend
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── filters.jsx      # Filter controls component
│   │   ├── jobCard.jsx      # Individual job card component
│   │   └── navbar.jsx       # Navigation bar component
│   ├── data/
│   │   └── jobsData.js      # Static job listings data
│   ├── pages/
│   │   ├── jobList.jsx      # Main job listing page
│   │   └── savedJobs.jsx    # Saved jobs page
│   ├── App.jsx              # Root component with routing
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

##  How to Use

1. **Browse Jobs**: The home page displays all available job listings
2. **Filter Jobs**: Use the filter controls at the top to narrow down results:
   - Type in the search box to find specific roles or companies
   - Select a location from the dropdown
   - Choose between Internship or Full-time positions
   - Set a minimum stipend requirement
3. **Save Jobs**: Click the bookmark icon on any job card to save it
4. **View Saved Jobs**: Navigate to the "Saved Jobs" page to see all your bookmarked positions
5. **Unsave Jobs**: Click the bookmark icon again to remove a job from your saved list

## Screenshots

### Main Job Listing Page
![Job Listing Page](Frontend/screenshots/main.png)
*Browse all available positions with real-time filtering*

### Filters in Action
![Filters](Frontend/screenshots/filters.png)
*Filter jobs by search term, location, type, and minimum stipend*

### Saved Jobs Page
![Saved Jobs](Frontend/screenshots/saved.png)
*View all your bookmarked job opportunities in one place*

### Mobile Responsive View
![Mobile View](Frontend/screenshots/mobile.png)
*Fully responsive design that works seamlessly on all devices*

> **Note**: Add your actual screenshots to a `screenshots` folder in the Frontend directory and update the paths accordingly.

##  Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

##  Customization

### Adding New Jobs

Edit the `src/data/jobsData.js` file to add or modify job listings:

```javascript
{
  id: 1,
  role: "Job Title",
  company: "Company Name",
  location: "City/Remote",
  stipend: 10000,
  type: "Internship" or "Full-time",
  tags: ["Skill1", "Skill2", "Skill3"]
}
```

### Modifying Filter Options

Update the filter options in `src/components/filters.jsx` to add new locations or job types.

##  Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, please reach out through the repository's issue tracker.

---

Built with using React and Vite
