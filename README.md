# TinyMCE Image Optimizer by Uploadcare Demo

This repository contains the demo code for the TinyMCE Image Optimizer by Uploadcare webinar. Learn how to integrate Uploadcare's powerful image optimization capabilities with TinyMCE to create a seamless content editing experience.


<img width="1487" alt="Screenshot 2025-03-17 at 2 00 30 AM" src="https://github.com/user-attachments/assets/625d3224-4e1f-47a3-b38e-bc7ed0d08cf7" />


## Features

- 📼 Automatic image optimization
- 📱 Responsive images with automatic srcset generation
- 🎨 Advanced image editing capabilities
- 🚀 Fast CDN delivery
- 📊 Real-time image transformation

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/mrinasugosh/tinymce-uploadcare-cms-demo.git
   cd tinymce-uploadcare-cms-demo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your API keys:
   ```env
   VITE_TINYMCE_API_KEY=your_tinymce_api_key
   VITE_UPLOADCARE_PUBLIC_KEY=upload_care_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Configuration

### TinyMCE Setup

The TinyMCE editor is configured with the Uploadcare plugin in `src/components/TinyEditor.jsx`. Key features include:

- Image upload and optimization
- Responsive image handling
- Advanced image editing tools
- Automatic CDN delivery

### Uploadcare Integration

The demo uses Uploadcare's JavaScript API for:

- Automatic image optimization
- Responsive image generation
- CDN delivery and caching
- Image transformation capabilities

## Resources

- [TinyMCE Documentation](https://www.tiny.cloud/docs/)
- [Uploadcare Documentation](https://uploadcare.com/docs/)
- [TinyMCE Uploadcare Plugin](https://www.tiny.cloud/docs/tinymce/latest/uploadcare/)

## Support

For questions and support:
- TinyMCE Support: [https://support.tiny.cloud/](https://support.tiny.cloud/)
- Uploadcare Support: [https://uploadcare.com/support/](https://uploadcare.com/support/)
