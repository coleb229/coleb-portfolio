'use server'
import { prisma } from './prisma'

export const sendMessage = async (formData:FormData) => {
  try {
    await prisma.message.create({
      data: {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
        timestamp: new Date().toDateString(),
      },
    });

  } catch (error) {
    console.error("Error sending message:", error);
    throw new Error("Failed to send message");
    return { error: "Failed to send message" };
  }
}