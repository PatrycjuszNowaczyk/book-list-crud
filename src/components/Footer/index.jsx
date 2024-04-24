import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        textAlign: 'center',
        marginTop: 'auto'
      }}
    >
      <Typography
        variant='overline'
        sx={{
          textAlign: 'center',
        }}
      >
        © <Link href='mailto:patrycjusz.nowaczyk@gmail.com' underline='hover' color='secondary'>Patrycjusz Nowaczyk</Link> {new Date().getFullYear()}
      </Typography>
    </Box>
  )
}

export default Footer