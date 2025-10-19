<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Conversation from '$lib/components/chat/Conversation.svelte';

  const { Story } = defineMeta({
    title: 'Components/Conversation',
    component: Conversation,
    tags: ['autodocs'],
    argTypes: {
      messages: { 
        control: 'object',
        description: 'Array of messages to display in the conversation'
      }
    },
    args: {
      messages: [
        {
          name: 'Alice',
          secondaryName: 'User',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
          content: 'Let\'s start a longer conversation to test scrolling.'
        },
        {
          name: 'Bot',
          secondaryName: 'AI',
          image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
          thoughts: 'The user wants to test the scrolling functionality. I should engage positively.',
          content: 'Sure! I\'m ready to chat.'
        },
        {
          name: 'Alice',
          secondaryName: 'User',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
          content: 'What\'s the weather like today?'
        },
        {
          name: 'Bot',
          secondaryName: 'AI',
          image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
          thoughts: 'I don\'t have real-time weather data, but I can provide a helpful response.',
          content: 'I don\'t have access to real-time weather data, but you can check your local weather forecast online or through a weather app.'
        },
        {
          name: 'Alice',
          secondaryName: 'User',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
          content: 'That makes sense. Can you help me with coding instead?'
        },
        {
          name: 'Bot',
          secondaryName: 'AI',
          image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
          content: 'Absolutely! I\'m here to help with coding. What would you like to work on?'
        },
        {
          name: 'Alice',
          secondaryName: 'User',
          image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
          content: 'I need to create a React component for displaying user profiles.'
        },
        {
          name: 'Bot',
          secondaryName: 'AI',
          image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face',
          thoughts: 'They want to create a profile component. I should provide a comprehensive example.',
          content: 'Great! Let\'s create a user profile component. We\'ll need to include things like an avatar, name, bio, and maybe some social links. Would you like a functional or class-based component?'
        }
      ]
    }
  });
</script>

<!-- Default story with multiple messages -->
<Story name="Default" />

<!-- Empty conversation -->
<Story name="Empty" args={{ 
  messages: []
}} />

