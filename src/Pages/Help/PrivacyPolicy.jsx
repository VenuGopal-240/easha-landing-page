import React from "react";
import { Box, Typography, Container } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth="md" sx={{ py: 11 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Privacy Policy
      </Typography>

      <Typography variant="body1" paragraph>
        We collect your details (name, contact, qualifications, registration number,
        clinic info, availability, and payment details) to create your profile and help
        patients connect with you. Consultation notes, prescriptions, chats, and technical
        data (like device info and IP) may also be stored for service and security.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        How we use your data:
      </Typography>
      <Box
        component="ul"
        sx={{
          pl: 2,
          ml: 0,
          listStyleType: "disc",
          listStylePosition: "inside",
          "& li": {
            display: "list-item",
            marginBottom: 1, 
          },
        }}
      >
        <li>
          <Typography variant="body1" component="span">
            Show your profile to patients
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="span">
            Manage appointments, consultations, and payments
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="span">
            Support prescriptions, labs, or pharmacy requests
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="span">
            Send important updates or reminders
          </Typography>
        </li>
      </Box>

      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
        Data sharing:
      </Typography>
      <Typography variant="body1" paragraph>
        Your data is never sold. It is shared only with patients, payment partners,
        labs, or pharmacies as required, or if legally necessary.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Security:
      </Typography>
      <Typography variant="body1" paragraph>
        All sensitive data is encrypted and stored securely. Only authorized staff and
        your patients can access relevant info. You are responsible for protecting your
        login details.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Your rights:
      </Typography>
      <Typography variant="body1" paragraph>
        You can update or request deletion of your account anytime (except where data must
        be kept by law).
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Your responsibilities:
      </Typography>
      <Box
        component="ul"
        sx={{
          pl: 2,
          ml: 0,
          listStyleType: "disc",
          listStylePosition: "inside",
          "& li": {
            display: "list-item",
            marginBottom: 1,
          },
        }}
      >
        <li>
          <Typography variant="body1" component="span">
            Provide accurate details and qualifications
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="span">
            Use the app responsibly and follow medical/legal guidelines
          </Typography>
        </li>
        <li>
          <Typography variant="body1" component="span">
            You are solely responsible for the medical advice and treatment you provide
          </Typography>
        </li>
      </Box>

      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mt: 3 }}>
        Payments & Liability:
      </Typography>
      <Typography variant="body1" paragraph>
        Payments are processed securely, but we are not liable for internet failures,
        third-party delays, or misuse of the app by patients.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        Ownership & Law:
      </Typography>
      <Typography variant="body1" paragraph>
        All app content belongs to us. Terms are governed by Indian law, with disputes
        under the company's registered jurisdiction.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
