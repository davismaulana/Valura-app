
import { XMarkIcon, CloudArrowUpIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

interface ImportUsersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ImportUsersModal: React.FC<ImportUsersModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="fixed inset-0 bg-black/70 transition-opacity" onClick={onClose} />

        <div className="relative transform overflow-hidden rounded-2xl bg-dark-surface text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl border border-dark-border">
          <div className="flex items-center justify-between px-6 py-4 border-b border-dark-border">
            <h3 className="text-lg font-bold text-white">Import Users</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="px-6 py-8">
            {/* Steps */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">1</div>
                <div className="ml-2 text-sm font-medium text-white">Upload</div>
              </div>
              <div className="w-16 h-0.5 bg-gray-700 mx-4"></div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 font-bold text-sm">2</div>
                <div className="ml-2 text-sm font-medium text-gray-400">Map</div>
              </div>
              <div className="w-16 h-0.5 bg-gray-700 mx-4"></div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center text-gray-400 font-bold text-sm">3</div>
                <div className="ml-2 text-sm font-medium text-gray-400">Review</div>
              </div>
            </div>

            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-600 rounded-xl p-10 text-center hover:border-primary hover:bg-primary/5 transition-all cursor-pointer">
              <CloudArrowUpIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Drop CSV file here or click to upload</h4>
              <p className="text-sm text-gray-500 mb-6">Max file size 5MB. Supported format: .csv</p>
              <button className="px-4 py-2 rounded-lg bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors border border-gray-600">
                Browse Files
              </button>
            </div>

            {/* Template Download */}
            <div className="mt-6 flex items-center justify-between p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  <DocumentTextIcon className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="text-sm font-medium text-white">Need a template?</h5>
                  <p className="text-xs text-gray-400">Download our CSV template to ensure correct formatting.</p>
                </div>
              </div>
              <button className="text-sm font-medium text-primary hover:text-primary-light">
                Download Template
              </button>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-dark-border bg-gray-800/30 flex justify-end gap-3">
            <button onClick={onClose} className="px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors">
              Cancel
            </button>
            <button disabled className="px-4 py-2 rounded-lg bg-primary/50 text-white/50 font-medium cursor-not-allowed">
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportUsersModal;
