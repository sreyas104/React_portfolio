import { Alert, AlertTitle, Stack } from "@mui/material";

export default function DescriptionAlerts() {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Stack>
    );
  }