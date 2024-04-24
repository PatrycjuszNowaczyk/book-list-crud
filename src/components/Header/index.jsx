import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import DesktopMenu from '@/components/DesktopMenu'
import MobileMenu from '@/components/MobileMenu'

const Header = () => {
  return (
    <Box component="header">
      <MobileMenu/>
      <Container
        maxWidth="xl"
      >
        <Typography
          variant="h1"
          sx={{
            textAlign: 'center',
            mt: 2,
            mb: {
              xs: 3,
              md: 1,
            }
          }}
        >
          Book list app
        </Typography>
      </Container>
      <DesktopMenu/>
      <Divider/>
    </Box>
  )
}

export default Header