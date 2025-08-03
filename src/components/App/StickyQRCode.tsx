import { useIsMobile } from '@/hooks/use-mobile';

export const StickyQRCode = () => {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50 bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900 mb-3 text-center">Download App</h3>
      <div className="bg-white p-2 rounded-lg">
        <img 
          src="/assets/images/1e98545e-9282-4c40-b680-9e902d14ab03.png"
          alt="QR Code to download app"
          className="w-[120px] h-[120px]"
        />
      </div>
      <p className="text-xs text-gray-500 text-center mt-2">Scan to download</p>
    </div>
  );
};