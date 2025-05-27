# Flauntly Client

A modern React application for discovering and booking local businesses.

## 📁 Project Structure

```
client/src/
├── components/           # Reusable UI components
│   ├── ui/              # Basic UI components (buttons, inputs, etc.)
│   │   ├── Button.jsx   # Reusable button component
│   │   ├── Input.jsx    # Reusable input component
│   │   └── index.js     # UI components exports
│   ├── layout/          # Layout components (navbar, footer, etc.)
│   │   ├── Navbar.jsx   # Navigation component
│   │   └── Footer.jsx   # Footer component
│   ├── business/        # Business-related components
│   │   ├── BusinessCard.jsx  # Business card component
│   │   └── index.js     # Business components exports
│   └── common/          # Common/shared components
│       ├── QRCode.jsx   # QR code component
│       ├── PhoneMockup.jsx # Phone mockup component
│       ├── TestimonialCard.jsx # Testimonial card component
│       └── index.js     # Common components exports
├── pages/               # Page components (routes)
│   ├── home/           # Home page related
│   │   └── Home.jsx    # Landing page
│   ├── search/         # Search page related  
│   │   └── Search.jsx  # Search page
│   ├── business/       # Business pages
│   │   ├── Business.jsx        # Business directory
│   │   └── BusinessDetails.jsx # Individual business page
│   ├── download/       # Download page
│   │   └── Download.jsx # App download page
│   └── auth/           # Authentication pages
│       ├── Login.jsx   # Login page
│       └── Register.jsx # Registration page
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.js # localStorage hook
│   └── index.js        # Hooks exports
├── services/           # API calls and external services
│   └── api.js          # API service layer
├── utils/              # Utility functions
│   └── index.js        # Utility functions
├── constants/          # App constants
│   └── index.js        # App-wide constants
├── contexts/           # React contexts
│   └── AuthContext.jsx # Authentication context
├── styles/             # CSS and styling files
│   └── index.css       # Main stylesheet
├── assets/             # Static assets (images, icons, etc.)
│   └── react.svg       # React logo
├── App.jsx             # Main app component
└── main.jsx            # Entry point
```

## 🧩 Components

### UI Components (`components/ui/`)
Reusable basic UI components that can be used throughout the app.

- **Button**: Configurable button with variants (primary, secondary, outline, ghost, danger)
- **Input**: Form input with validation states and icons

### Business Components (`components/business/`)
Components specific to business functionality.

- **BusinessCard**: Displays business information in a card format

### Layout Components (`components/layout/`)
Components that define the app's layout structure.

- **Navbar**: Main navigation component
- **Footer**: Footer component

## 🔧 Utilities (`utils/`)

Common utility functions:
- `formatCurrency()` - Format currency values
- `formatDate()` - Format dates
- `formatTime()` - Format time
- `calculateDistance()` - Calculate distance between coordinates
- `formatDistance()` - Format distance display
- `generateStarRating()` - Generate star rating display
- `truncateText()` - Truncate text with ellipsis
- `debounce()` - Debounce function calls
- `isBusinessOpen()` - Check if business is currently open
- `isValidEmail()` - Email validation
- `isValidPhone()` - Phone number validation
- `formatPhoneNumber()` - Format phone numbers
- `generateId()` - Generate unique IDs
- `capitalize()` - Capitalize first letter
- `toSlug()` - Convert string to URL slug

## 🔌 Services (`services/`)

API service layer for external communications:
- **businessAPI**: Business-related API calls
- **userAPI**: User authentication and profile management
- **locationAPI**: Location and geolocation services
- **categoriesAPI**: Business categories management

## 🎣 Hooks (`hooks/`)

Custom React hooks:
- **useLocalStorage**: Manage localStorage with React state

## 📊 Constants (`constants/`)

App-wide constants:
- **APP_CONFIG**: App configuration
- **API_CONFIG**: API endpoints and settings
- **BUSINESS_CATEGORIES**: Available business categories
- **PRICE_RANGES**: Price range options
- **SORT_OPTIONS**: Sorting options
- **DEFAULTS**: Default values
- **UI_CONSTANTS**: UI-related constants
- **BUSINESS_STATUS**: Business status types
- **RATING**: Rating constants

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: Additional styles in `styles/index.css`

## 🚀 Usage Examples

### Using UI Components
```jsx
import { Button, Input } from '../components/ui';

function MyComponent() {
  return (
    <div>
      <Input 
        label="Email" 
        type="email" 
        placeholder="Enter your email"
        required 
      />
      <Button variant="primary" size="large">
        Submit
      </Button>
    </div>
  );
}
```

### Using Business Components
```jsx
import { BusinessCard } from '../components/business';

function BusinessList({ businesses }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map(business => (
        <BusinessCard 
          key={business.id}
          business={business}
          onFavorite={handleFavorite}
          onShare={handleShare}
          onClick={handleBusinessClick}
        />
      ))}
    </div>
  );
}
```

### Using Utilities
```jsx
import { formatCurrency, generateStarRating, debounce } from '../utils';

function PriceDisplay({ price, rating }) {
  return (
    <div>
      <span>{formatCurrency(price)}</span>
      <span>{generateStarRating(rating)}</span>
    </div>
  );
}
```

### Using API Services
```jsx
import { businessAPI } from '../services/api';

async function fetchBusinesses() {
  try {
    const businesses = await businessAPI.getBusinesses({
      category: 'restaurants',
      limit: 10
    });
    return businesses;
  } catch (error) {
    console.error('Failed to fetch businesses:', error);
  }
}
```

### Using Custom Hooks
```jsx
import { useLocalStorage } from '../hooks';

function UserPreferences() {
  const [preferences, setPreferences] = useLocalStorage('userPrefs', {
    theme: 'light',
    language: 'en'
  });

  return (
    <div>
      <button onClick={() => setPreferences({...preferences, theme: 'dark'})}>
        Switch to Dark Mode
      </button>
    </div>
  );
}
```

## 📝 Best Practices

1. **Component Organization**: Keep components small and focused on a single responsibility
2. **Import/Export**: Use index files for clean imports
3. **Naming**: Use PascalCase for components, camelCase for functions and variables
4. **File Structure**: Group related files together in appropriate folders
5. **Reusability**: Create reusable components in the `ui/` directory
6. **Constants**: Store magic numbers and strings in the constants file
7. **API Calls**: Centralize all API calls in the services layer
8. **Utilities**: Extract common logic into utility functions

## 🔄 Adding New Features

1. **New Page**: Add to `pages/` directory with appropriate subfolder
2. **New Component**: Add to appropriate component directory (`ui/`, `business/`, `common/`)
3. **New Utility**: Add to `utils/index.js`
4. **New API**: Add to appropriate service in `services/api.js`
5. **New Hook**: Add to `hooks/` directory and export in index file
6. **New Constant**: Add to `constants/index.js`

This organized structure makes the codebase more maintainable, scalable, and easier to navigate for developers.
