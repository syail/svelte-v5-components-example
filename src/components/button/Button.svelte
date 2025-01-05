<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { VariantProps } from 'class-variance-authority';

	import { buttonVariants } from './button.variants';
	import { cn } from '$lib/util';

	type ButtonProps = HTMLButtonAttributes & VariantProps<typeof buttonVariants>;

	let { variant, size, children, ...rest }: ButtonProps = $props();
</script>

<button {...rest} class={cn(buttonVariants({ variant, size }), rest.class)}>
	{@render children?.()}
</button>
