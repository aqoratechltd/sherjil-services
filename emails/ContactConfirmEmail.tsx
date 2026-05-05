import * as React from 'react';
import { Html, Head, Body, Container, Section, Text, Button, Preview } from '@react-email/components';

interface ContactConfirmEmailProps {
  name: string;
}

export const ContactConfirmEmail = ({ name }: ContactConfirmEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>We've received your message - Veltrix</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={logo}>VELTRIX</Text>
          </Section>
          
          <Section style={bodySection}>
            <Text style={heading}>Hi {name},</Text>
            <Text style={text}>
              Thank you for reaching out to Veltrix. We have received your inquiry and our team is currently reviewing it.
            </Text>
            <Text style={text}>
              You can expect a response from one of our partners within 24 hours. If your request is urgent, feel free to reach us directly on WhatsApp:
            </Text>

            <Section style={buttonContainer}>
              <Button style={button} href="https://wa.me/923273001777">
                Chat on WhatsApp
              </Button>
            </Section>

            <Text style={text}>
              Best regards,<br/>
              The Veltrix Team
            </Text>
          </Section>
          
          <Section style={footer}>
            <Text style={footerText}>
              Veltrix — From Idea to Impact.<br/>
              Lahore, Pakistan<br/>
              <a href="https://veltrix.io" style={link}>veltrix.io</a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#080808',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#111111',
  margin: '40px auto',
  padding: '0',
  borderRadius: '8px',
  border: '1px solid #2a2a2a',
  maxWidth: '600px',
  overflow: 'hidden',
};

const header = {
  padding: '30px 48px',
  backgroundColor: '#0f0f0f',
  borderBottom: '1px solid #1f1f1f',
  textAlign: 'center' as const,
};

const logo = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#f5f5f5',
  letterSpacing: '2px',
  margin: '0',
};

const bodySection = {
  padding: '30px 48px',
};

const heading = {
  fontSize: '20px',
  fontWeight: 'bold',
  color: '#f5f5f5',
  marginBottom: '20px',
};

const text = {
  color: '#a0a0a0',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '10px 0 20px',
};

const buttonContainer = {
  textAlign: 'left' as const,
  margin: '30px 0',
};

const button = {
  backgroundColor: '#6EE7B7',
  color: '#000000',
  padding: '12px 24px',
  borderRadius: '4px',
  fontWeight: 'bold',
  textDecoration: 'none',
};

const footer = {
  padding: '30px 48px',
  backgroundColor: '#0f0f0f',
  borderTop: '1px solid #1f1f1f',
  textAlign: 'center' as const,
};

const footerText = {
  color: '#606060',
  fontSize: '14px',
  lineHeight: '22px',
};

const link = {
  color: '#6EE7B7',
  textDecoration: 'none',
};

export default ContactConfirmEmail;
