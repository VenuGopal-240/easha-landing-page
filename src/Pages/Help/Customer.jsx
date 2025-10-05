import React from "react";
import { Container, Typography, Link } from "@mui/material";

const Customer = () => {
  return (
    <Container maxWidth="md" sx={{ py: 12}}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Customer Support
      </Typography>

      <Typography variant="body1" paragraph>
        For any support inquiries, please reach out to us at:{" "}
        <Link href="mailto:contact@eashaop.com" color="primary" underline="hover">
          contact@eashaop.com
        </Link>
      </Typography>

      <Typography variant="body1" paragraph>
        You can also contact us by phone at <b color="primary">+91 63016 80400</b> during business hours.
      </Typography>
    </Container>
  );
};

export default Customer;
