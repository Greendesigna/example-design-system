import outline from '../assets/icons/saved-outline.svg';
import { SavedIcon } from './icons';
import './SavedButton.css';

type SavedButtonProps = {
  saved: boolean;
  onToggle: () => void;
};

/** Heart toggle. Outline when not saved; filled with the accent colour when saved. */
export function SavedButton({ saved, onToggle }: SavedButtonProps) {
  return (
    <button
      type="button"
      className="saved-button"
      aria-pressed={saved}
      aria-label={saved ? 'Remove from saved' : 'Save'}
      onClick={onToggle}
    >
      {saved ? (
        <SavedIcon className="saved-button__filled" width={32} height={32} />
      ) : (
        <img src={outline} alt="" width={32} height={32} />
      )}
    </button>
  );
}
