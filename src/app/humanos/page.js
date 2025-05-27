import { Chat } from '@/components/chat/Chat';

export const dynamic = 'force-dynamic';

export default function HumanosPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 w-full">
      <Chat />
    </div>
  );
}
