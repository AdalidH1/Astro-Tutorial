import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Toggle as TogglePrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted data-[state=on]:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 border border-transparent data-[state=on]:border-current",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-muted",
        fire: "bg-[#E62828] text-white hover:bg-red-600 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#E62828]",
        water:
          "bg-[#3382F0] text-white hover:bg-blue-600 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#3382F0]",
        grass:
          "bg-[#3DA324] text-white hover:bg-green-600 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#3DA324]",
        electric:
          "bg-[#F9C001] text-white hover:bg-yellow-600 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#F9C001]",
        psychic:
          "bg-[#EF3F7A] text-white hover:bg-purple-600 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#EF3F7A]",
        ice: "bg-[#47DAFF] text-white hover:bg-cyan-600 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#47DAFF]",
        dragon:
          "bg-[#4F60E2] text-white hover:bg-indigo-600 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#4F60E2]",
        dark: "bg-[#4F3F3D] text-white hover:bg-gray-900 hover:text-gray-300 data-[state=on]:bg-gray-300 data-[state=on]:text-[#4F3F3D]",
        fairy:
          "bg-[#EF71F0] text-white hover:bg-pink-600 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#EF71F0]",
        fighting:
          "bg-[#F78104] text-white hover:bg-orange-600 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#F78104]",
        poison:
          "bg-[#923FCC] text-white hover:bg-purple-800 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#923FCC]",
        ground:
          "bg-[#92501A] text-white hover:bg-yellow-800 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#92501A]",
        flying:
          "bg-[#81B9EF] text-white hover:bg-blue-400 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#81B9EF]",
        bug: "bg-[#92A213] text-white hover:bg-green-800 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#92A213]",
        rock: "bg-[#B1AA82] text-white hover:bg-gray-600 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#B1AA82]",
        ghost:
          "bg-[#703E71] text-white hover:bg-gray-800 hover:text-gray-300 data-[state=on]:bg-gray-300 data-[state=on]:text-[#703E71]",
        steel:
          "bg-[#60A1B8] text-white hover:bg-gray-500 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#60A1B8]",
        normal:
          "bg-[#A0A2A0] text-white hover:bg-gray-400 hover:text-white data-[state=on]:bg-white data-[state=on]:text-[#A0A2A0]",
      },
      size: {
        default:
          "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
