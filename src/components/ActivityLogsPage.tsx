import { useState, useEffect, Fragment } from "react"
import { Divider, Skeleton, Stack } from "@mui/material"

const activityLog = [
  { id: 1, message: "Company created", timestamp: "2024-11-01 10:30:00" },
  { id: 2, message: "Contact added to company", timestamp: "2024-11-02 12:15:00" },
  { id: 3, message: "Deal closed successfully", timestamp: "2024-11-03 09:45:00" },
  { id: 4, message: "Note added by user", timestamp: "2024-11-04 14:10:00" },
  { id: 5, message: "Task completed", timestamp: "2024-11-05 16:00:00" },
]

const ActivityLogsPage = () => {
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsPending(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (isPending) {
    return (
      <Stack mt={0.5}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Stack spacing={2} sx={{ mt: 1 }} key={index}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ alignItems: "center" }}
            >
              <Skeleton
                variant="circular"
                width={20}
                height={20}
              />
              <Skeleton width="100%" />
            </Stack>
            <Skeleton variant="rectangular" height={50} />
            <Divider />
          </Stack>
        ))}
      </Stack>
    )
  }

  return (
    <Stack spacing={2} mt={0.5}>
      {activityLog.map(activity => (
        <Fragment key={activity.id}>
          <Stack direction="row" spacing={2} alignItems="center">
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                backgroundColor: "#1976d2",
                display: "inline-block",
              }}
            />
            <strong>{activity.message}</strong>
          </Stack>
          <small style={{ color: "#888" }}>{activity.timestamp}</small>
          <Divider />
        </Fragment>
      ))}
    </Stack>
  )
}

export default ActivityLogsPage