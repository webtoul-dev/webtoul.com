<template>
  <section class="max-w-xl mx-auto my-12 p-8 bg-white rounded-2xl shadow flex flex-col gap-8">
    <div class="text-center">
      <h1 class="text-3xl font-extrabold text-blue-600 mb-2">Contact Us</h1>
      <p class="text-lg text-slate-600">We'd love to hear from you! Reach out for support, feedback, or partnership opportunities.</p>
    </div>
    <form class="flex flex-col gap-4">
      <div class="flex gap-4">
        <input type="text" placeholder="Your Name" required class="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-200 outline-none" />
        <input type="email" placeholder="Your Email" required class="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-200 outline-none" />
      </div>
      <textarea placeholder="Your Message" rows="5" required class="px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-200 outline-none"></textarea>
      <button type="submit" class="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow hover:from-blue-700 hover:to-indigo-600 transition">Send Message</button>
    </form>
    <div class="bg-slate-100 rounded-xl p-6 text-slate-700 flex flex-col gap-2">
      <div><strong>Email:</strong> support@aiwebsitebuilder.com</div>
      <div><strong>Address:</strong> 123 AI Lane, Web City, 10001</div>
      <div><strong>Phone:</strong> +1 (555) 123-4567</div>
    </div>
    <div class="bg-indigo-100 rounded-xl p-8 text-center text-slate-500 text-lg mt-2">Map coming soon...</div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>
