<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Message from '$lib/components/chat/Message.svelte';

  const { Story } = defineMeta({
    title: 'Components/Message',
    component: Message,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'select',
        options: ['left', 'right', 'full', 'director'],
        description: 'Message variant: left (agent), right (user), full (detailed messages), or director (omniscient narration)'
      },
      name: { 
        control: 'text',
        description: 'The name of the message author'
      },
      secondaryName: { 
        control: 'text',
        description: 'Secondary name or subtitle for the author'
      },
      image: { 
        control: 'text',
        description: 'URL or path to the author\'s avatar image'
      },
      thoughts: { 
        control: 'text',
        description: 'Internal character thoughts (optional)'
      },
      content: { 
        control: 'text',
        description: 'The message content'
      },
      isStreaming: {
        control: 'boolean',
        description: 'Whether the message is currently being streamed (shows skeleton when no content)'
      }
    },
    args: {
      name: 'John Doe',
      secondaryName: 'Assistant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      thoughts: 'I need to be careful with my response here. The user seems to be testing my capabilities, so I should provide a thoughtful and helpful answer.',
      content: 'This is a much longer message that demonstrates how the Message component handles longer text content. It should wrap properly and maintain good readability while showing the full message content in a clean, organized way.'
    }
  });
</script>

<!-- Default story with long content and thoughts -->
<Story name="Default" />

<!-- Left variant (agent messages) -->
<Story name="Left Variant" args={{ 
  variant: 'left'
}} />

<!-- Right variant (user messages) -->
<Story name="Right Variant" args={{ 
  variant: 'right'
}} />

<!-- Story showing streaming state (no content) -->
<Story name="Streaming (No Content)" args={{
  isStreaming: true,
  content: undefined
}} />

<!-- Director variant (omniscient narration) -->
<Story name="Director Variant" args={{
  variant: 'director',
  content: 'The room fell silent as the weight of the revelation settled upon them.'
}} />
