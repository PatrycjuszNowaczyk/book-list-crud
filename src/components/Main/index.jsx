import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Main = () => {
  
  return (
    <Box component="main">
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="body1"
            sx={{
              textAlign: 'center',
            }}
          >
            Here goes app content
          </Typography>
          <Typography
            variant="h1"
            gutterBottom
            textAlign='center'
          >
            H1 Lorem ipsum.
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            textAlign='center'
          >
            H2 Lorem ipsum.
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            textAlign='center'
          >
            H3 Lorem ipsum.
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            textAlign='center'
          >
            H4 Lorem ipsum.
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            textAlign='center'
          >
            H5 Lorem ipsum.
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            textAlign='center'
          >
            H6 Lorem ipsum.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Main