<script>
	export let action;
	export let requestToken;
	export let clientName;
	export let isServer;
	export let onCancel;
	export let onSubmit;
	export let projectEditorButtonCaption;
	export let projectEditorCaption;
	export let editProjectData;

	import { translate } from "@nextcloud/l10n";

	let name = editProjectData ? editProjectData.name : "";

	const submit = () => {
		onSubmit({ name });
	};
</script>

<div class="inner tm_new-item">
	<h3>{projectEditorCaption}</h3>
	<form {action} on:submit|preventDefault={submit} method="post">
		<label class="space-top">
			{translate('timemanager', 'Project name')}
			<br />
			<input
				autofocus
				type="text"
				style="width: 100%;"
				class="input-wide"
				name="name"
				placeholder={translate('timemanager', 'A project name')}
				bind:value={name}
				required />
		</label>
		<label class="space-top">
			{translate('timemanager', 'For client')}
			<br />
			<strong>{clientName}</strong>
		</label>
		<br />
		<input type="hidden" name="requesttoken" value={requestToken} />
		<div class="oc-dialog-buttonrow twobuttons reverse">
			<button type="submit" class="button primary">{projectEditorButtonCaption}</button>
			{#if !isServer}
				<button type="reset" class="button" on:click|preventDefault={onCancel}>
					{translate('timemanager', 'Cancel')}
				</button>
			{/if}
		</div>
	</form>
</div>
