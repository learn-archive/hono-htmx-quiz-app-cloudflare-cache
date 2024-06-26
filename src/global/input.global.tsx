export function InputGlobal(props: { label: string }) {
  return (
    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">{props.label}</span>
      </div>
      <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
    </label>
  );
}
