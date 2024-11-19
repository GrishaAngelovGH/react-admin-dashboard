import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar
} from "@mui/material"

import { useTranslate } from "react-admin"

const ImageGridPage = () => {
  const translate = useTranslate()

  const posters = [
    { id: 1, category: translate('custom.imageCategories.animals'), url: "https://marmelab.com/posters/animals-4.jpeg" },
    { id: 2, category: translate('custom.imageCategories.avatars'), url: "https://marmelab.com/posters/avatar-8.jpeg" },
    { id: 4, category: translate('custom.imageCategories.business'), url: "https://marmelab.com/posters/business-5.jpeg" },
    { id: 5, category: translate('custom.imageCategories.cars'), url: "https://marmelab.com/posters/cars-11.jpeg" },
    { id: 6, category: translate('custom.imageCategories.city'), url: "https://marmelab.com/posters/city-8.jpeg" },
    { id: 7, category: translate('custom.imageCategories.flowers'), url: "https://marmelab.com/posters/flowers-4.jpeg" },
    { id: 8, category: translate('custom.imageCategories.food'), url: "https://marmelab.com/posters/food-3.jpeg" },
    { id: 9, category: translate('custom.imageCategories.nature'), url: "https://marmelab.com/posters/nature-2.jpeg" },
    { id: 10, category: translate('custom.imageCategories.sports'), url: "https://marmelab.com/posters/sports-6.jpeg" },
  ];

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 2 }}>
      <ImageList sx={{ width: 800, height: "auto" }} cols={3} gap={16}>
        {posters.map((poster) => (
          <ImageListItem key={poster.id}>
            <img
              src={poster.url}
              alt={poster.category}
              loading="lazy"
              style={{ borderRadius: "8px" }}
            />
            <ImageListItemBar
              title={poster.category}
              position="below"
              sx={{
                textAlign: "center",
                color: "#333",
                fontWeight: "bold",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

export default ImageGridPage