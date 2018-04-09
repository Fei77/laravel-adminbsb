<?php

namespace Fei77\LaravelAdminBSB;

use Illuminate\Support\ServiceProvider;
use Blade;

class LaravelAdminBSBServiceProvider extends ServiceProvider
{
    /**
     * Perform post-registration booting of services.
     *
     * @return void
     */
    public function boot()
    {
      $this->loadViewsFrom(__DIR__.'/views', 'adminbsb');
      if ($this->app->runningInConsole()) {
        $this->publishes([
          __DIR__ . '/assets' => public_path('vendor/adminbsb'),
        ], 'adminbsb');
      }

      Blade::component('adminbsb::layout', 'layout');
      Blade::component('adminbsb::_components.container', 'container');

      // Widgets components
      Blade::component('adminbsb::_components.widgets.card', 'card');

      // Form components
      Blade::component('adminbsb::_components.form.inputs.input', 'input');
      Blade::component('adminbsb::_components.form.inputs.tags', 'tags');
      Blade::component('adminbsb::_components.form.inputs.datepicker', 'datepicker');
      Blade::component('adminbsb::_components.form.inputs.select', 'select');
      Blade::component('adminbsb::_components.form.inputs.spinner', 'spinner');
      Blade::component('adminbsb::_components.form.inputs.image', 'image');
      Blade::component('adminbsb::_components.form.inputs.textarea', 'textarea');
      Blade::component('adminbsb::_components.form.inputs.editor', 'editor');
      Blade::component('adminbsb::_components.form.inputs.color', 'color');

      Blade::component('adminbsb::_components.form.form', 'form');
      Blade::component('adminbsb::_components.form.translations', 'translations');

      // UI
      Blade::component('adminbsb::_components.ui.sortable.sortable', 'sortable');
      Blade::component('adminbsb::_components.ui.sortable.item', 'sortableitem');

      Blade::component('adminbsb::_components.ui.collapse.collapse', 'collapse');
      Blade::component('adminbsb::_components.ui.collapse.collapse-item', 'collapseitem');

      Blade::component('adminbsb::_components.ui.tab.nav-tabs', 'navtabs');
      Blade::component('adminbsb::_components.ui.tab.nav-tabs-item', 'navtabsitem');
      Blade::component('adminbsb::_components.ui.tab.tab-content', 'tabcontent');
      Blade::component('adminbsb::_components.ui.tab.tab-content-item', 'tabcontentitem');
      Blade::component('adminbsb::_components.ui.modal', 'modal');

    }

    /**
     * Register any package services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
