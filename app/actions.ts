'use server'

import { getDoc } from '@/lib/google-sheets';

export async function submitContactForm(formData: FormData) {
    try {
        const doc = await getDoc();

        // Select the sheet by name (must match the tab name exactly)
        const sheet = doc.sheetsByTitle['Contact_Enquiries'];

        if (!sheet) throw new Error("Sheet 'Contact_Enquiries' not found");

        // Add the row
        await sheet.addRow({
            Timestamp: new Date().toISOString(),
            Name: formData.get('name')?.toString() || '',
            Email: formData.get('email')?.toString() || '',
            Phone: formData.get('phone')?.toString() || '',
            Message: formData.get('message')?.toString() || '',
        });

        console.log('Successfully added to Google Sheet');
        return { success: true };
    } catch (error) {
        console.error('Google Sheet Error:', error);
        return { success: false, error: 'Failed to save data to Google Sheet' };
    }
}
