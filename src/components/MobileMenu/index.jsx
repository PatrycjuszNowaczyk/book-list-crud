import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import Button from '@/components/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { appLinks } from '@/configs/links'
import ThemeContext from '@/contexts/ThemeContext/ThemeContext'
import ThemeToggle from '@/components/ThemeToggle'
import MenuContextProvider from '@/contexts/MenuContext/MenuContextProvider'
import MenuContext from '@/contexts/MenuContext/MenuContext'
import MenuButton from './MenuButton'

const MobileContextConsumer = () => {
  const { isLightTheme } = useContext(ThemeContext)
  const { isMenuOpen, toggleMenu } = useContext(MenuContext)
  
  const muiTheme = useTheme()
  const isDesktop = useMediaQuery(muiTheme.breakpoints.up('md'))
  
  useEffect(() => {
    if (isDesktop && isMenuOpen) {
      toggleMenu()
    }
  }, [isDesktop, isMenuOpen])
  
  const handleButtonClick = () => {
    toggleMenu()
  }
  
  return (
    <Container
      max-width="xl"
      sx={{
        display: {
          xs: 'block',
          md: 'none',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'end',
          mt: 2,
        }}
      >
        <MenuButton/>
      </Box>
      
      <Drawer
        anchor="left"
        onClose={toggleMenu}
        open={isMenuOpen}
        PaperProps={
          {
            sx: {
              width: '100%',
              maxWidth: '350px',
              backgroundColor: isLightTheme
                ? muiTheme.palette.background.paper
                : muiTheme.palette.primary.dark,
            },
          }
        }
      >
        <Stack
          sx={{
            width: '100%',
            padding: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
              marginBottom: 2,
            }}
          >
            <ThemeToggle/>
            
            <MenuButton/>
          </Box>
          
          <Box>
            <Stack>
              {appLinks.map((link) => {
                return (
                  <Button
                    key={link.url}
                    to={link.url}
                    component={Link}
                    onClick={handleButtonClick}
                    sx={{
                      border: '1px solid transparent',
                      '&:hover': {
                        borderColor: muiTheme.palette.primary.light,
                      },
                      color: isLightTheme
                        ? muiTheme.palette.primary.main
                        : muiTheme.palette.primary.contrastText,
                    }}
                  >
                    {link.name}
                  </Button>
                )
              })}
            </Stack>
          </Box>
        </Stack>
      </Drawer>
    </Container>
  )
}

const MobileMenu = () => (
  <MenuContextProvider>
    <MobileContextConsumer/>
  </MenuContextProvider>
)

export default MobileMenu