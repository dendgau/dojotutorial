define([
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/test.html",
	"dojo/dom-style",
	"dojo/_base/fx",
	"dojo/_base/lang",
	"dojo/on",
	"dojo/mouse",
	"require", // context-sensitive require to get URLs to resources from relative paths
	"dijit/_OnDijitClickMixin",
], function(declare, _WidgetBase, _TemplatedMixin, template, domStyle, baseFx, lang, on, mouse, require, _OnDijitClickMixin){
        return declare([_WidgetBase, _TemplatedMixin, _OnDijitClickMixin], {

			templateString: template,

            baseClass: "heloDOJO",
            _count: 0,

            _onClick: function(){
                this.titleNode.innerHTML = "DOJO is number one " + (++ this._count)
            },

			postCreate: function(){
			    alert(1);
			    alert(this._count);
			    this.title.innerHTML = this._count;
				this.inherited(arguments);
			},
		});
    });