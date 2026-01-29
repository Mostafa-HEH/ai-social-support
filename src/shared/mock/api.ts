export const mockSubmitSupportForm = (data: unknown) => {
  return new Promise<{ success: true }>((resolve, reject) => {
    setTimeout(() => {
      console.log("Submitted payload:", data);

      if (Math.random() > 0.1) {
        resolve({ success: true });
      } else {
        reject(new Error("Mock server error"));
      }
    }, 1200);
  });
};
