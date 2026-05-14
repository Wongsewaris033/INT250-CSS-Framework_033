<script setup>
const features = [
  {
    id: 1,
    icon: "icon-access-anywhere.svg",
    title: "Access your files from anywhere",
    description:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    id: 2,
    icon: "icon-security.svg",
    title: "Security you can trust",
    description:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    id: 3,
    icon: "icon-collaboration.svg",
    title: "Real-time collaboration",
    description:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    id: 4,
    icon: "icon-any-file.svg",
    title: "Any file, anywhere",
    description:
      "Upload any file type and have it accessible in any browser, from any device, at any time.",
  },
]
</script>

<template>
  <!-- Features Section -->
  <section id="features" class="features-section">
    <div class="features-container">
      <div class="features-grid">
        <div
          v-for="feature in features"
          :key="feature.id"
          class="feature-card"
        >
          <div class="feature-icon-wrapper">
            <img
              :src="`/src/assets/${feature.icon}`"
              :alt="feature.title"
              class="h-20 w-20"
            />
          </div>
          <h3 class="feature-title text-gray-900 dark:text-white">{{ feature.title }}</h3>
          <p class="feature-description text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>