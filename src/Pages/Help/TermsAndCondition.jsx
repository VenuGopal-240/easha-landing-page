import React from "react";
import { Box, Typography, Container,Link } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: 12 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Terms and Conditions
      </Typography>

      <Typography variant="body1" paragraph>
        Effective Date: 15-09-2025
        <br />
        Company Name: eAsha Healthcare Pvt. Ltd.
        <br />
        Website:{" "}
        <Link href="https://www.eashaop.com/" target="_blank" rel="noopener noreferrer">
          https://www.eashaop.com/
        </Link>
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        1. Introduction
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to eAsha Healthcare. By accessing or using our website, you agree to these Terms and Conditions. Please read them carefully before using our services.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        2. Services Offered
      </Typography>
      <Typography variant="body1" paragraph>
        Our platform provides healthcare-related services such as:
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
        <li><Typography variant="body1" component="span">Patient registration and login</Typography></li>
        <li><Typography variant="body1" component="span">Doctor consultations and appointment booking</Typography></li>
        <li><Typography variant="body1" component="span">Access to prescriptions and reports</Typography></li>
        <li><Typography variant="body1" component="span">Online payments for healthcare services</Typography></li>
      </Box>
      <Typography variant="body1" paragraph>
        These services are for informational and consultation purposes and are not a substitute for emergency medical care.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        3. User Registration
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
        <li><Typography variant="body1" component="span">Users must be 18 years or older to register.</Typography></li>
        <li><Typography variant="body1" component="span">You are responsible for keeping your login credentials secure.</Typography></li>
        <li><Typography variant="body1" component="span">You agree to provide accurate and complete information during registration.</Typography></li>
      </Box>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        4. Privacy and Data Protection
      </Typography>
      <Typography variant="body1" paragraph>
        We collect and process personal and medical information as per our Privacy Policy.
        Your data will be used only for healthcare services and not shared with third parties without your consent, except as required by law.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        5. Appointments and Consultations
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
        <li><Typography variant="body1" component="span">Appointments are subject to doctor availability.</Typography></li>
        <li><Typography variant="body1" component="span">We reserve the right to reschedule or cancel appointments when necessary.</Typography></li>
        <li><Typography variant="body1" component="span">Users must ensure all details provided while booking are correct.</Typography></li>
      </Box>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        6. Payments
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
        <li><Typography variant="body1" component="span">Payments are processed securely through Razorpay or authorized payment gateways.</Typography></li>
        <li><Typography variant="body1" component="span">All fees are displayed before confirming payment.</Typography></li>
        <li><Typography variant="body1" component="span">Payments are non-refundable except as stated in our Refund Policy.</Typography></li>
      </Box>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        7. Refund and Cancellation
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
        <li><Typography variant="body1" component="span">Refunds are allowed only for failed transactions or cancelled appointments by the doctor.</Typography></li>
        <li><Typography variant="body1" component="span">Refund requests must be made within 48 hours of the payment.</Typography></li>
        <li><Typography variant="body1" component="span">Cancellation by the user may not qualify for a full refund.</Typography></li>
      </Box>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        8. Medical Disclaimer
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
        <li><Typography variant="body1" component="span">All consultations are based on the information shared by patients.</Typography></li>
        <li><Typography variant="body1" component="span">We do not provide emergency medical services.</Typography></li>
        <li><Typography variant="body1" component="span">In case of emergencies, users should contact nearby hospitals or emergency services.</Typography></li>
      </Box>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        9. User Responsibilities
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
        <li><Typography variant="body1" component="span">Use the services only for lawful and medical purposes.</Typography></li>
        <li><Typography variant="body1" component="span">Not share false, misleading, or incomplete information.</Typography></li>
        <li><Typography variant="body1" component="span">Not misuse or attempt to hack the platform.</Typography></li>
      </Box>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        10. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        All website content including logo, text, and software belongs to eAsha Healthcare Pvt. Ltd.
        You may not reproduce or distribute any material without written permission.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        11. Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        We are not responsible for any loss, damage, or delay caused by:
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
        <li><Typography variant="body1" component="span">Technical issues</Typography></li>
        <li><Typography variant="body1" component="span">Errors in data entered by users</Typography></li>
        <li><Typography variant="body1" component="span">Third-party service failures</Typography></li>
      </Box>
      <Typography variant="body1" paragraph>
        Our liability will not exceed the amount paid for the service.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        12. Account Suspension
      </Typography>
      <Typography variant="body1" paragraph>
        We reserve the right to suspend or terminate user accounts that violate these terms or misuse our services.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        13. Changes to Terms
      </Typography>
      <Typography variant="body1" paragraph>
        We may update these Terms and Conditions from time to time. The latest version will always be available on our website.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        14. Governing Law
      </Typography>
      <Typography variant="body1" paragraph>
        These Terms are governed by the laws of India, with jurisdiction in Hyderabad, Telangana, India.
      </Typography>

      <Typography variant="h6" fontWeight={600} gutterBottom>
        15. Contact Information
      </Typography>
      <Typography variant="body1" paragraph>
        For any questions or concerns regarding these Terms, please contact:
        <br />
        Email:  <Link href="mailto:contact@eashaop.com" color="inherit" underline="hover">
  contact@eashaop.com
</Link>
        <br />
        Phone: +91 63016 80400
        <br />
        Address: Plat no-78, 7-1-212/A/63, Shivbagh colony Ameerpet, Prakashamnagar, Secunderabad, Hyderabad- 500016, Telangana
      </Typography>
    </Container>
  );
};

export default TermsAndConditions;
