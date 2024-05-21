let activeBlock = null;

function toggleText(block) {
    if (activeBlock) {
        activeBlock.classList.remove('active');
    }
    if (activeBlock === block) {
        activeBlock = null;
    } else {
        block.classList.add('active');
        activeBlock = block;
    }
}