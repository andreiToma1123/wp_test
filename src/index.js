// var registerBlockType = wp.blocks.registerBlockType;
import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";

registerBlockType("course/firstblock", {
    edit: function () {
        const blockProps = useBlockProps();
        console.log("edit", blockProps);
        return <p {...blockProps} >Edit JSX</p>
    },
    save: function () {
        const blockProps = useBlockProps.save();
        console.log("save", blockProps);
        return <p {...blockProps} >Save JSX</p>
    }
});