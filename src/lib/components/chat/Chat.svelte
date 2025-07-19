<script lang="ts">
    import { useChatStore } from "@/store/chat.svelte";
    import { Pause, ArrowRight } from "@lucide/svelte";
    const chatStore = useChatStore();
  
    let inputValue = $state("");
    let textarea: HTMLTextAreaElement | null = $state(null);
  
    function autoResize() {
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = textarea.scrollHeight + 2 + "px";
      }
    }
  
    function onSubmit(value: string) {
      chatStore.submitMessage(value);
      inputValue = "";
    }
  
    function onAbort() {
      chatStore.abort();
    }
  
    function handleKeyDown(event: KeyboardEvent) {
      if (chatStore.isStreaming) return;
      if (
        textarea &&
        event.key === "Enter" &&
        !event.shiftKey &&
        inputValue.trim() !== ""
      ) {
        event.preventDefault();
        onSubmit(inputValue);
        textarea.focus();
      }
    }
  </script>
  
  {#snippet messageBubble(
    author: string,
    content: string,
    alignment: "left" | "right",
  )}
    <div
      class="w-full flex {alignment === 'left' ? 'justify-start' : 'justify-end'}"
    >
      <div
        class="flex flex-col gap-1 {alignment === 'left'
          ? 'items-start'
          : 'items-end'} max-w-[60%]"
      >
        <div class="text-xs text-neutral-200">{author}</div>
        <div
          class="content-wrapper rounded-lg py-2 px-3 bg-neutral-800/30 shadow-neutral-500/50 text-sm break-words text-neutral-200"
        >
          {content}
        </div>
      </div>
    </div>
  {/snippet}
  
  <div class="grow h-full max-h-full">
    {#if false}
      <div
        class="flex flex-col gap-2 h-full w-full overflow-y-auto p-4 pb-[120px] bg-neutral-600/30"
      >
        <div class="text-sm text-neutral-400">No conversation selected</div>
      </div>
    {:else}
      <div
        class="chat-wrapper flex flex-col gap-2 h-full w-full overflow-y-auto p-4 pb-[120px]"
      >
        {#each chatStore.messages as message}
          {@render messageBubble(
            message.author.charAt(0).toUpperCase() + message.author.slice(1),
            message.content,
            message.author === "user" ? "right" : "left",
          )}
        {/each}
        {#if chatStore.isStreaming && chatStore.response}
          {@render messageBubble("Assistant", chatStore.response, "left")}
        {/if}
      </div>
      <div class="sticky bottom-0 left-0 right-0 p-4">
        <div
          class="input-wrapper focus:outline-1 mx-auto flex flex-row gap-2 py-1 px-1 rounded-2xl bg-neutral-800 w-[70%] max-w-full h-fit border border-neutral-400/40 {chatStore.isStreaming
            ? 'opacity-50'
            : ''}"
        >
          <textarea
            bind:this={textarea}
            bind:value={inputValue}
            oninput={autoResize}
            class="grow rounded-lg px-2 py-1 text-sm focus:outline-none resize-none caret-neutral-200 text-neutral-200 min-h-[24px] overflow-hidden"
            placeholder="Shift + Enter to send"
            disabled={chatStore.isStreaming}
            onkeydown={handleKeyDown}
          ></textarea>
          <button
            class="w-8 h-8 rounded-full flex items-center justify-center text-sm focus:outline-none bg-neutral-200 text-neutral-800 hover:bg-neutral-300 transition-colors my-auto mx-2"
            onclick={() => {
              if (chatStore.isStreaming) {
                onAbort();
              } else {
                onSubmit(inputValue);
              }
            }}
          >
            {#if chatStore.isStreaming}
              <Pause class="size-4" />
            {:else}
              <ArrowRight class="size-4" />
            {/if}
          </button>
        </div>
      </div>
    {/if}
  </div>
  
  <style lang="postcss">
    @reference "tailwindcss";
  
    .chat-wrapper::-webkit-scrollbar {
      width: 0;
      scrollbar-gutter: stable;
      display: none;
    }
  
    .input-wrapper {
      box-shadow: 0 0 20px 5px --alpha(var(--color-neutral-200) / 50%);
    }
  </style>
  
  