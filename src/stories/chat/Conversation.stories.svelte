<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Conversation from '$lib/components/chat/Conversation.svelte';

  const { Story } = defineMeta({
    title: 'Components/Conversation',
    component: Conversation,
    tags: ['autodocs'],
    argTypes: {
      variant: {
        control: 'select',
        options: ['narrative', 'chat'],
        description: 'Conversation variant: narrative (full-width messages) or chat (left/right bubbles)'
      },
      messages: { 
        control: 'object',
        description: 'Array of messages to display in the conversation'
      }
    },
    args: {
      messages: [
        {
          role: 'director',
          name: '',
          secondaryName: '',
          image: '',
          content: 'A new conversation begins on a quiet afternoon...'
        },
        {
          role: 'user',
          name: 'Alice',
          secondaryName: 'User',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
          content: 'Let\'s start a longer conversation to test scrolling.'
        },
        {
          role: 'character',
          name: 'Bot',
          secondaryName: 'Assistant',
          image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
          thoughts: 'The user wants to test the scrolling functionality. I should engage positively.',
          content: 'Sure! I\'m ready to chat.'
        },
        {
          role: 'user',
          name: 'Alice',
          secondaryName: 'User',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
          content: 'What\'s the weather like today?'
        },
        {
          role: 'character',
          name: 'Bot',
          secondaryName: 'Assistant',
          image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
          thoughts: 'I don\'t have real-time weather data, but I can provide a helpful response.',
          content: 'I don\'t have access to real-time weather data, but you can check your local weather forecast online or through a weather app.'
        },
        {
          role: 'director',
          name: '',
          secondaryName: '',
          image: '',
          content: 'The conversation shifts to more technical matters...'
        },
        {
          role: 'user',
          name: 'Alice',
          secondaryName: 'User',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
          content: 'That makes sense. Can you help me with coding instead?'
        },
        {
          role: 'character',
          name: 'Bot',
          secondaryName: 'Assistant',
          image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
          content: 'Absolutely! I\'m here to help with coding. What would you like to work on?'
        },
        {
          role: 'user',
          name: 'Alice',
          secondaryName: 'User',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
          content: 'I need to create a React component for displaying user profiles.'
        },
        {
          role: 'character',
          name: 'Bot',
          secondaryName: 'Assistant',
          image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
          thoughts: 'They want to create a profile component. I should provide a comprehensive example.',
          content: 'Great! Let\'s create a user profile component. We\'ll need to include things like an avatar, name, bio, and maybe some social links. Would you like a functional or class-based component?'
        },
        {
          role: 'director',
          name: '',
          secondaryName: '',
          image: '',
          content: 'And so their collaborative work begins...'
        }
      ]
    }
  });
</script>

<!-- Narrative story with multiple messages (narrative variant) -->
<Story name="Narrative" />

<!-- Chat variant story with left/right message bubbles -->
<Story name="Chat" args={{ 
  variant: 'chat'
}} />

<!-- Empty conversation -->
<Story name="Empty" args={{ 
  messages: []
}} />

