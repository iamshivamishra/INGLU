import { Html, Body, Container, Text, Hr, Link } from "@react-email/components";

type Props = {
  firstName: string;
  ticketId: string;
};

export default function TicketConfirmationEmail({
  firstName,
  ticketId,
}: Props) {
  return (
    <Html>
      <Body style={{ fontFamily: "Arial, sans-serif" }}>
        <Container>
          <Text>Hey {firstName},</Text>

          <Text style={{ fontWeight: "bold", fontSize: "18px" }}>
            BOOM 💥 <br />
            You’re officially IN for HOLI BASH 🌈🔥
          </Text>

          <Text>
            Your ticket has been successfully confirmed, and we can’t wait to
            celebrate the wildest Holi experience with you!
          </Text>

          <Hr />

          <Text style={{ fontWeight: "bold" }}>🎟 Ticket Details</Text>

          <Text>
            Event: HOLI BASH Season - 5 <br />
            Date: 3 March 2026 <br />
            Venue: PUBG FARMS, Behind AMITY NOIDA <br />
            Entry Time: 12:00 PM
          </Text>

          <Hr />

          <Text>
            👉 Please carry this email (digital copy is fine). <br />
            👉 Ensure your ticket is clearly visible at the entry gate. <br />
            👉 Each ticket is valid for one-time entry only.
          </Text>

          <Text style={{ fontWeight: "bold", fontSize: "16px", marginTop: "20px" }}>
            🎫 Your Ticket Link:
          </Text>

          <Link
            href={`${process.env.APP_URL}/ticket?id=${ticketId}`}
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              backgroundColor: "#f4f4f4",
              padding: "10px",
              textAlign: "center",
              letterSpacing: "2px",
              display: "inline-block",
              marginTop: "10px",
            }}
          >
            VIEW YOUR TICKET
          </Link>

          <Hr />

          <Text style={{ fontWeight: "bold" }}>🌈 WHAT TO EXPECT</Text>

          <Text>
            • Live DJ & Music Madness <br />
            • Rain Dance Setup <br />
            • Organic Holi Colours <br />
            • High-Energy Crowd <br />
            • Food & Beverage Zones <br />
            • Insane Photo Moments
          </Text>

          <Text>
            This isn’t just a Holi party. <br />
            This is HOLI BASH.
          </Text>

          <Hr />

          <Text style={{ fontWeight: "bold" }}>👕 WHAT TO WEAR?</Text>

          <Text>
            White outfits. <br />
            Comfortable footwear. <br />
            Energy at 1000%.
          </Text>

          <Hr />

          <Text style={{ fontWeight: "bold" }}>📲 Stay Updated</Text>

          <Text>
            Follow us on Instagram:{" "}
            <Link href="https://www.instagram.com/holibash_inglu/">
              https://www.instagram.com/holibash_inglu/
            </Link>
            <br />
            For support:{" "}
            <Link href="mailto:info@ingluglobal.in">
              info@ingluglobal.in
            </Link>
          </Text>

          <Hr />

          <Text style={{ fontWeight: "bold" }}>
            ⚠️ IMPORTANT EVENT TERMS (Please Read Carefully)
          </Text>

          <Text>
            1. Entry allowed only with valid ticket. <br />
            2. Gates close at 5:00 PM. Late entry may not be permitted. <br />
            3. Outside colours, food, beverages, or alcohol are strictly prohibited. <br />
            4. Misconduct, intoxication, or unruly behavior will lead to immediate removal without refund. <br />
            5. Tickets are non-refundable and non-transferable. <br />
            6. In case of event postponement, tickets remain valid for the new date. <br />
            7. The event may be photographed or recorded for promotional use. <br />
            8. Management reserves the right of admission. <br />
            9. These terms and conditions are subject to change at the discretion of the organizer. <br />
            10. INR 500 mandatory cover charge applicable on gate.
          </Text>

          <Hr />

          <Text>
            This is your official confirmation. <br />
            Save it. Screenshot it. Forward it to your squad.
          </Text>

          <Text>
            See you in the colors, <br />
            Team INGLU <br />
            Holi Bash 2026 🌈🔥
          </Text>
        </Container>
      </Body>
    </Html>
  );
}