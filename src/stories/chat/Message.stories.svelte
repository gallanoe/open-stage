<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Message from '$lib/components/chat/Message.svelte';

  const { Story } = defineMeta({
    title: 'Components/Message',
    component: Message,
    tags: ['autodocs'],
    argTypes: {
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
      }
    },
    args: {
      name: 'John Doe',
      secondaryName: 'Assistant',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
      content: 'Hello! This is a sample message from the Message component.'
    }
  });
</script>

<!-- Default story with all props -->
<Story name="Default" />

<!-- Story with thoughts -->
<Story name="With Thoughts" args={{ 
  thoughts: 'I need to be careful with my response here. The user seems to be testing my capabilities, so I should provide a thoughtful and helpful answer.',
  content: 'I understand your question. Let me provide you with a comprehensive answer that addresses all aspects of what you\'re asking about.'
}} />

<!-- Story with different author -->
<Story name="User Message" args={{ 
  name: 'Alice Smith', 
  secondaryName: 'User',
  image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
  content: 'This is a message from a user.'
}} />

<!-- Story with long content -->
<Story name="Long Content" args={{ 
  content: 'This is a much longer message that demonstrates how the Message component handles longer text content. It should wrap properly and maintain good readability while showing the full message content in a clean, organized way.'
}} />

<!-- Story with minimal props -->
<Story name="Minimal" args={{ 
  name: 'Bot',
  secondaryName: 'AI',
  image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
  content: 'Short message'
}} />
