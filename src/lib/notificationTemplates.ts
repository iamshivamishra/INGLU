import { NotificationType } from "@/lib/notificationTypes";


export function getNotificationContent(
  type: NotificationType,
  data?: {
    productName?: string;
    courseName?: string;
    amount?: number;
    scheduledate?: string;
    announcementitle?: string;
    url?: string;
    
  },
) {
  switch (type) {
    case "NEW_PRODUCT_ADDED":
      return {
        title: "New Product Added",
        message: `A new product ${
          data?.productName ? `(${data.productName})` : ""
        } has been added.`,
        actionUrl: data?.url,
      };

    case "EMAIL_VERIFIED":
      return {
        title: "Email Verified",
        message: "Your email address has been successfully verified.",
      };

    case "PHONE_VERIFIED":
      return {
        title: "Phone Verified",
        message: "Your phone number has been successfully verified.",
      };

    case "COURSE_UPDATED":
      return {
        title: "Course Updated",
        message: `The course ${
          data?.courseName ? `(${data.courseName})` : ""
        } has been updated.`,
        actionUrl: data?.url,
      };

    case "REFUND_PROCESSED":
      return {
        title: "Refund Processed",
        message: `Your refund ${
          data?.amount ? `(${data.amount})` : ""
        } has been successfully processed.`,
        actionUrl: data?.url,
      };

    case "QR_CODE_GENERATED":
      return {
        title: "QR Code Generated",
        message: "Your QR code has been successfully generated.",
        actionUrl: data?.url,
      };

    case "TICKETS_ALMOST_SOLD_OUT":
      return {
        title: "Tickets Almost Sold Out",
        message: "Hurry! Tickets are about to sell out. Book yours now.",
        actionUrl: data?.url,
      };

    case "CLASS_SCHEDULE_CHANGED":
      return {
        title: "Class Schedule Changed",
        message: `Your class is scheduled for ${
          data?.scheduledate ? `(${data.scheduledate})` : ""
        }.`,
        actionUrl: data?.url,
      };

    case "NEW_ANNOUNCEMENT":
      return {
        title: "New Announcement",
        message: "There is a new announcement for you.",
        actionUrl: data?.url,
      };
  }
}
