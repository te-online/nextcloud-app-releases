<?php
script('timemanager', 'timemanager');
style('timemanager', 'timemanager');

?>

<?php print_unescaped( $this->inc( 'partials/navigation' ) ); ?>

<div id="app-content">
	<div class="container">
		<div class="section">
			<section class="section">
				<span data-svelte="QuickAdd.svelte"></span>
				<span data-store="<?php p($_['store']); ?>"></span>
			</section>

			<?php print_unescaped( $this->inc( 'partials/latest' ) ); ?>

			<section class="section statistics" data-svelte="Statistics.svelte"></section>
		</div>
	</div>
</div>