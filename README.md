# JHBC Design and Build

A premium design-build studio website built with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Features

- **Modern Architecture**: Built with Next.js 15, React 18, and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Smooth transitions with Framer Motion
- **Contact Management**: Supabase database integration for inquiry storage
- **Email Notifications**: Resend API for automated email delivery
- **Admin Dashboard**: Secure authentication with Supabase OAuth
- **Portfolio Gallery**: Dynamic project showcase with image galleries
- **Video Gallery**: Lumion visualization gallery with video support

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Supabase
- **Email**: Resend
- **Animations**: Framer Motion
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Resend account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jhbc-design-build
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure `.env.local` with your credentials:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
EMAIL_TO=your-email@example.com
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
npm start
```

### Linting

Check code quality:
```bash
npm run lint
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── actions/           # Server actions
│   ├── admin/             # Admin pages
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── project/           # Project detail pages
│   ├── services/          # Services page
│   ├── about/             # About page
│   ├── lumion/            # Video gallery
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── AdminPanel.tsx    # Admin dashboard
│   ├── AnimatedSection.tsx
│   └── ContactForm.tsx
├── lib/                   # Utility functions
│   ├── supabase-admin.ts
│   ├── supabase-browser.ts
│   ├── supabase-server.ts
│   ├── resend.ts
│   ├── types.ts
│   └── utils.ts
├── public/               # Static assets
└── package.json
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-only) |
| `RESEND_API_KEY` | Resend API key for email delivery |
| `EMAIL_TO` | Email address to receive inquiries |

## Database Setup

Create a `inquiries` table in Supabase with the following schema:

```sql
CREATE TABLE inquiries (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

Ensure your hosting platform supports:
- Node.js 18+
- Environment variables
- Serverless functions (for API routes)

## Security

- All sensitive keys are stored in environment variables
- Server actions validate and sanitize user input
- Supabase Row Level Security (RLS) should be configured
- Email addresses are validated before processing

## Performance

- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Server-side rendering for SEO
- Static generation where possible

## Contributing

1. Create a feature branch
2. Make your changes
3. Run linting: `npm run lint`
4. Submit a pull request

## License

All rights reserved © JHBC Design and Build

## Support

For issues or questions, contact: info@jhbcdesignbuild.com
