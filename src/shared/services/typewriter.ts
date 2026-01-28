type TypewriterOptions = {
  speed?: number;
};

export const typewriter = async (
  text: string,
  onUpdate: (value: string) => void,
  { speed = 20 }: TypewriterOptions = {},
) => {
  let current = "";

  for (let i = 0; i < text.length; i++) {
    current += text[i];
    onUpdate(current);
    await new Promise((r) => setTimeout(r, speed));
  }
};
