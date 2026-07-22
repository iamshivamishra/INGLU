// =========================
// Notifications API Calls
// =========================

// Get notifications (ALL / unread / search)
export async function getNotifications(params: {
  userId: string;
  unread?: boolean;
  search?: string;
}) {
  const query = new URLSearchParams();

  query.append("userId", params.userId);

  if (params.unread === true) {
    query.append("unread", "true");
  }

  if (params.search) {
    query.append("search", params.search);
  }

  const res = await fetch(`/api/notifications?${query.toString()}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch notifications");

  return res.json();
}

// Create notification
export async function createNotification(data: {
  userId: string;
  title: string;
  message: string;
  type: "EVENT" | "TICKET" | "COURSE" | "MEMBERSHIP";
  relatedId?: string;
  actionUrl?: string;
}) {
  const res = await fetch("/api/notifications", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to create notification");

  return res.json();
}

// Mark as read
export async function markAsRead(notificationId: string) {
  const res = await fetch("/api/notifications", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ notificationId }),
  });

  if (!res.ok) throw new Error("Failed to mark as read");

  return res.json();
}
