import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@/components/Button'
import { appLinks } from '@/configs/links'
import ThemeContext from '@/contexts/ThemeContext/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'

const DesktopMenu = () => {
  const { isLightTheme } = useContext(ThemeContext)
  
  return (
    <Container
      max-width="xl"
      sx={{
        display: {
          xs: 'none',
          md: 'block',
        },
        mb: 1
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}>
        {appLinks.map(({ name, url }) => {
            return (
              <Button
                key={name}
                to={url}
                component={Link}
                sx={{
                  color: 'inherit',
                  textDecoration: 'none',
                  padding: 1,
                  borderColor: 'transparent',
                  '&:hover': {
                    color: 'primary.contrastText',
                    backgroundColor: isLightTheme
                      ? 'primary.light'
                      : 'primary.dark',
                  },
                }}
              >
                {name}
              </Button>
            )
          })
        }
        
        < ThemeToggle
          sx={{
            ml: 1,
          }}
        />
      </Box>
    </Container>
  )
}

export default DesktopMenu