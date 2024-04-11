export const getToast = (event) => {
  const id = Date.now();
  let notification = { id };
  switch (event.target.value) {
    case "Success":
      notification = {
        ...notification,
        message: "Success toast notification",
        color: "#22c55e",
        icon: "✅",
      };
      break;
    case "Info":
      notification = {
        ...notification,
        message: "Info toast notification",
        color: "#3b82f6",
        icon: "ℹ️",
      };
      break;
    case "Warning":
      notification = {
        ...notification,
        message: "Warning toast notification",
        color: "#f97316",
        icon: "⚠️",
      };
      break;
    case "Error":
      notification = {
        ...notification,
        message: "Error toast notification",
        color: "#ef4444",
        icon: "❌",
      };
      break;
  }
  return notification;
};
