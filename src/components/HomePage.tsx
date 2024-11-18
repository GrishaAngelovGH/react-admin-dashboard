import { useTranslate } from "react-admin"

import {
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material"

const HomePage = () => {
  const translate = useTranslate()

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <Card sx={{ maxWidth: 400, padding: 2, textAlign: "center" }}>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {translate("custom.homePage.title")}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {translate("custom.homePage.description")}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

export default HomePage