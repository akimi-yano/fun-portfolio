function orientationChangeHandler(e) { 
    disableScrollOrSwipe(), setTimeout(function () { $(window).trigger("resize") }, 500) 
} 
function enableScrollOrSwipe() { 
    canScrollOrSwipe = !0 
} 
function disableScrollOrSwipe() { 
    canScrollOrSwipe = !1 
} 
function initVariablesAfterShowContainer() { 
    fireworkCenterX = .5 * fireworkArray[0].offsetWidth, fireworkCenterY = .5 * fireworkArray[0].offsetHeight, fireworkOneRadiusDistance = (fireworkCenterY - fireworkDotRadius) / fireworkRowNumber, fireworkOneRotationAngle = 2 * Math.PI / fireworkColumnNumber 
} 
function resetVariables() { 
    canAnimateBuildingInformation = canAnimatePlantInformation = !(pageVerticalPosition = 0), 0 == isFishStillAnimating && (canAnimateFishInformation = !0), 0 == isCrabStillAnimating && (canAnimateCrabInformation = !0), 0 == isTurtleStillAnimating && (canAnimateTurtleInformation = !0), canDrawManyFireworks = canAnimateSocialContainer = canAnimateNbaInformation = canAnimateAlienInformation = canAnimateSquidInformation = canAnimateRobotInformation = !0 
} 
function resetFunctions() { positionPlants(), positionBuildings(), 0 == isFishStillAnimating && positionSeaAnimals(fishArray, numberOfFishInEachRowArray, 150, 100), 0 == isCrabStillAnimating && positionSeaAnimals(crabArray, numberOfCrabInEachRowArray, 150, 100), 0 == isTurtleStillAnimating && positionSeaAnimals(turtleArray, numberOfTurtleInEachRowArray, 150, 100), positionNbaElements(), positionExperience1Elements(), positionExperience2Elements(), positionExperience3Elements(), positionSocialContainer(), positionExperienceTextContainer(), positionChainBlockAndStringContainer(), resetFireworkSvg() } 

function initTouchEvents() { 
    document.addEventListener("touchstart", handleStart, !1), document.addEventListener("touchmove", handleMove, !1), document.addEventListener("touchend", handleEnd, !1) 
} 
function handleStart(e) { 
    touchStartX = e.targetTouches[0].pageX, pageVerticalPositionOnTouch = pageVerticalPosition 
} 
function handleMove(e) { 
    e.preventDefault(), touchCurrentX = e.targetTouches[0].pageX, 1 == canScrollOrSwipe && (detectPageVerticalPosition(), runTheseFunctionsAfterScrollOrSwipe()) 
} 
function handleEnd(e) { 
    e.preventDefault(), touchEndX = e.changedTouches[0].pageX 
} 
function runTheseFunctionsAfterScrollOrSwipe() { 
    orientAI(), checkAIJumpFallSwim(), moveLayers(), shiftUpDownHorizontalLayers(), animateInformationAndEnemiesElements(), animateAIRunSwim(), hideScrollOrSwipeTextContainer(), hideContactConfirmationContainer(), deviceFunctionScrollSwipe(), printScrollSwipeText() 
} 
function deviceFunctionScrollSwipe() { 
    "computer" != deviceName && "vertical" == layersMovement && positionHorizontalLayersToHaveSameRightPosition() 
} 
function showContainer() { 
    containerDiv.setAttribute("class", "") } 

function shiftUpHorizontalLayersAfterEverythingLoaded() { 
        for (var e = 0; e < layerHorizontalArray.length; e++)
        $(layerHorizontalArray[e]).stop().animate({ top: "0px" }, 1e3, function () { finishShiftUpHorizontalLayersAfterEverythingLoaded() }) } 
        function finishShiftUpHorizontalLayersAfterEverythingLoaded() { 1 == canFinishShiftUpHorizontalLayersAfterEverythingLoaded && (isPreloadShiftUpAnimationFinish = !(canFinishShiftUpHorizontalLayersAfterEverythingLoaded = !1), makePageScrollable(), shiftDownAIContainer(), animateScrollOrSwipeTextContainer()) } 
        
function shiftDownAIContainer() { setAIJumpDownAndFallFrame(), $(aiContainerDiv).stop().animate({ bottom: "20%" }, 500, function () { setAIStaticFrame(), enableAnimateAIRunSwim() }), "internet explorer" == browserName && browserVersion <= 8 && enableAnimateAIRunSwim() } 

function makePageScrollable() { contentDiv.setAttribute("class", ""), enableScrollOrSwipe() } 

function setFrontLayerVerticalHeight() { layerVerticalArray[layerVerticalArray.length - 1].style.height = 2 * containerDiv.offsetHeight + bannersContainerDiv.offsetHeight + gapBetweenContactCloudAndBannersContainer + "px" } 

function setBannersContainerVerticalPosition() { bannersContainerDiv.style.bottom = containerDiv.offsetHeight + "px" } 

function setPageHeight() { pageDiv.style.height = layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth + layerVerticalArray[layerVerticalArray.length - 1].offsetHeight + distanceBetweenAIAndBalloon + "px" } 

function setLayerSpeed() { for (; 0 < layerHorizontalSpeedArray.length;)layerHorizontalSpeedArray.pop(); for (; 0 < layerVerticalSpeedArray.length;)layerVerticalSpeedArray.pop(); for (var e = 0; e < layerHorizontalArray.length; e++) { var t = (layerHorizontalArray[e].offsetWidth - containerDiv.offsetWidth) / (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth); layerHorizontalSpeedArray.push(t) } for (e = 0; e < layerVerticalArray.length; e++) { var i = (layerVerticalArray[e].offsetHeight - containerDiv.offsetHeight) / (layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight); layerVerticalSpeedArray.push(i) } } 

function detectPageVerticalPosition() { previousPageVerticalPosition = pageVerticalPosition, "computer" == deviceName ? pageVerticalPosition = "internet explorer" == browserName ? document.documentElement.scrollTop : pageYOffset : ((pageVerticalPosition = pageVerticalPositionOnTouch + (touchStartX - touchCurrentX)) < 0 && (pageVerticalPosition = 0), pageVerticalPosition > pageDiv.offsetHeight - containerDiv.offsetHeight && (pageVerticalPosition = pageDiv.offsetHeight - containerDiv.offsetHeight)), deltaPageVerticalPosition = pageVerticalPosition - previousPageVerticalPosition, pageVerticalPosition <= 0 && (resetVariables(), resetFunctions()) } 

function moveLayers() { if (setLayersMovement(), "horizontal" == layersMovement) { for (var e = 0; e < layerHorizontalArray.length; e++)layerHorizontalArray[e].style.left = -1 * layerHorizontalSpeedArray[e] * pageVerticalPosition + "px"; positionLayerHorizontalToBottom(), clearHappyAITimer(), positionVerticalLayersHorizontally() } 

if ("vertical" == layersMovement) { for (e = 0; e < layerVerticalArray.length; e++)layerVerticalArray[e].style.bottom = -1 * layerVerticalSpeedArray[e] * (pageVerticalPosition - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth)) + "px"; positionVerticalLayersAtLeftMost(), positionHorizontalLayersToHaveSameRightPosition(), positionHorizontalLayersVertically(), clearShiftAIFrameTimer(), clearHappyAITimer() } "not moving 1" == layersMovement && (positionVerticalLayersAtLeftMost(), positionVerticalLayersToHaveSameTopPosition(), positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition(), clearHappyAITimer()), "not moving 2" == layersMovement && (positionVerticalLayersAtLeftMost(), positionVerticalLayersToHaveSameTopPosition(), positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition(), animateSocialContainer(), happyAI(), drawManyFireworks()), positionBalloonAndAIContainerHorizontally(), positionContactContainer(), positionFireworksContainer() } 

function positionVerticalLayersAtLeftMost() { for (var e = 0; e < layerVerticalArray.length; e++)layerVerticalArray[e].style.left = "0px" } 

function positionHorizontalLayersToHaveSameRightPosition() { for (var e = 0; e < layerHorizontalArray.length; e++)layerHorizontalArray[e].style.left = containerDiv.offsetWidth - layerHorizontalArray[e].offsetWidth + "px" } 

function positionHorizontalLayersVertically() { for (var e = 0; e < layerHorizontalArray.length; e++)layerHorizontalArray[e].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px" } function positionHorizontalLayersAtBottomMost() { for (var e = 0; e < layerHorizontalArray.length; e++)layerHorizontalArray[e].style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetHeight - containerDiv.offsetHeight + "px" } 

function setAILeftAndRightEdge() { aiRightEdge = .5 * (containerDiv.offsetWidth + aiDiv.offsetWidth) - 65, aiLeftEdge = .5 * (containerDiv.offsetWidth - aiDiv.offsetWidth) + 65 } function positionVerticalLayersToHaveSameTopPosition() { for (var e = 0; e < layerVerticalArray.length; e++)layerVerticalArray[e].style.bottom = containerDiv.offsetHeight - layerVerticalArray[e].offsetHeight + "px" } 

function positionVerticalLayersBottomToHorizontalLayersBottom() { for (var e = 0; e < layerVerticalArray.length; e++)layerVerticalArray[e].style.bottom = -1 * layerHorizontalArray[e].offsetTop + "px" } 

function shiftUpDownHorizontalLayers() { (previousPageVerticalPosition < sea1Div.offsetLeft - aiLeftEdge || previousPageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - aiRightEdge) && pageVerticalPosition >= sea1Div.offsetLeft - aiLeftEdge && pageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - aiRightEdge && (isAISwimming = !0, shiftUpLayerHorizontal(), shiftAIToSeaFloor(), createBubble()), previousPageVerticalPosition >= sea1Div.offsetLeft - aiLeftEdge && previousPageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - aiRightEdge && (pageVerticalPosition < sea1Div.offsetLeft - aiLeftEdge || pageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - aiRightEdge) && (isAISwimming = !1, shiftDownLayerHorizontal(), shiftAIToGroundLevel(), clearInterval(bubbleTimer), clearInterval(blinkSeaAnimalsTimer)) } 

function shiftUpDownHorizontalLayersOnResize() { pageVerticalPosition >= sea1Div.offsetLeft - aiLeftEdge && pageVerticalPosition <= sea1Div.offsetLeft + sea1Div.offsetWidth - aiRightEdge && (clearInterval(shiftUpLayerHorizontalTimer), clearInterval(shiftDownLayerHorizontalTimer), isAISwimming = !0, positionLayerHorizontalToTop(), positionVerticalLayersBottomToHorizontalLayersBottom(), createBubble()), (pageVerticalPosition < sea1Div.offsetLeft - aiLeftEdge || pageVerticalPosition > sea1Div.offsetLeft + sea1Div.offsetWidth - aiRightEdge) && (clearInterval(shiftUpLayerHorizontalTimer), clearInterval(shiftDownLayerHorizontalTimer), isAISwimming = !1, "horizontal" == layersMovement ? (positionLayerHorizontalToBottom(), positionVerticalLayersBottomToHorizontalLayersBottom()) : (positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition()), clearInterval(bubbleTimer), clearInterval(blinkSeaAnimalsTimer)) } 

function setShiftUpLayerHorizontalDistance() { shiftUpLayerHorizontalDistance = .75 * containerDiv.offsetHeight } 

function shiftUpLayerHorizontal() { setShiftUpLayerHorizontalDistance(), clearShiftUpDownLayerHorizontalTimer(), shiftUpLayerHorizontalTimer = setInterval(function () { moveUpLayerHorizontal() }, shiftUpDownLayerHorizontalInterval), disableIsAIJumpingAndFalling() } function moveUpLayerHorizontal() { if ("horizontal" == layersMovement) { for (var e = 0; e < layerHorizontalArray.length; e++) { var t = layerHorizontalArray[e].offsetTop - shiftUpDownLayerHorizontalIncrement; t <= -shiftUpLayerHorizontalDistance ? (t = -shiftUpLayerHorizontalDistance, layerHorizontalArray[e].style.top = t + "px", clearInterval(shiftUpLayerHorizontalTimer)) : layerHorizontalArray[e].style.top = t + "px", aiContainerDiv.offsetTop > sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop && (isAIBelowSeaLevel = !0) } positionVerticalLayersBottomToHorizontalLayersBottom() } else clearInterval(shiftUpLayerHorizontalTimer), positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition(), isAIBelowSeaLevel = !1 } 

function shiftDownLayerHorizontal() { clearShiftUpDownLayerHorizontalTimer(), shiftDownLayerHorizontalTimer = setInterval(function () { moveDownLayerHorizontal() }, shiftUpDownLayerHorizontalInterval) } 

function moveDownLayerHorizontal() { if ("horizontal" == layersMovement) { for (var e = 0; e < layerHorizontalArray.length; e++) { var t = layerHorizontalArray[e].offsetTop + shiftUpDownLayerHorizontalIncrement; 0 <= t ? (t = 0, layerHorizontalArray[e].style.top = t + "px", clearInterval(shiftDownLayerHorizontalTimer)) : layerHorizontalArray[e].style.top = t + "px", aiContainerDiv.offsetTop < sea1Div.offsetTop + layerHorizontalArray[layerHorizontalArray.length - 1].offsetTop && (isAIBelowSeaLevel = !1) } positionVerticalLayersBottomToHorizontalLayersBottom() } else clearInterval(shiftDownLayerHorizontalTimer), positionHorizontalLayersAtBottomMost(), positionHorizontalLayersToHaveSameRightPosition(), isAIBelowSeaLevel = !1 } 

function clearShiftUpDownLayerHorizontalTimer() { clearInterval(shiftUpLayerHorizontalTimer), clearInterval(shiftDownLayerHorizontalTimer) } 

function shiftAIToGroundLevel() { $(aiContainerDiv).stop().animate({ bottom: containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop + "px" }, 300, function () { }) } 

function shiftAIToSeaFloor() { $(aiContainerDiv).stop().animate({ bottom: seaFloorDiv.offsetHeight + "px" }, 300, function () { }) } 

function positionLayerHorizontalToTop() { if (1 == isAISwimming) { setShiftUpLayerHorizontalDistance(); for (var e = 0; e < layerHorizontalArray.length; e++)layerHorizontalArray[e].style.top = -shiftUpLayerHorizontalDistance + "px"; for (e = 0; e < layerVerticalArray.length; e++)layerVerticalArray[e].style.bottom = shiftUpLayerHorizontalDistance + "px" } } 

function positionLayerHorizontalToBottom() { if (0 == isAISwimming) { for (var e = 0; e < layerHorizontalArray.length; e++)layerHorizontalArray[e].style.top = "0px"; for (e = 0; e < layerVerticalArray.length; e++)layerVerticalArray[e].style.bottom = "0px" } } 

function checkAIJumpFallSwim() { if ("horizontal" == layersMovement) if (1 == isAISwimming) 1 == isAIBelowSeaLevel && aiSwimUp(); else for (var e = 0; e < elevationArray.length; e++)aiJumpUp(e), aiFall(e) } 

function aiJumpUp(e) { (previousPageVerticalPosition <= elevationArray[e].offsetLeft - aiRightEdge && pageVerticalPosition > elevationArray[e].offsetLeft - aiRightEdge || previousPageVerticalPosition >= elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - aiLeftEdge && pageVerticalPosition < elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - aiLeftEdge) && (positionAIAtGroundLevel(), $(aiContainerDiv).stop().animate({ bottom: [containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop + 300, "easeOutCubic"] }, 300, function () { aiJumpDown(e) }), setAIJumpUpFrame()) } 

function aiJumpDown(e) { pageVerticalPosition > elevationArray[e].offsetLeft - aiRightEdge && pageVerticalPosition < elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - aiLeftEdge && ($(aiContainerDiv).stop().animate({ bottom: [containerDiv.offsetHeight - elevationArray[e].offsetTop, "easeInCubic"] }, 300, function () { disableIsAIJumpingAndFalling(), setAIStaticFrame() }), setAIJumpDownAndFallFrame()) } 

function aiFall(e) { (previousPageVerticalPosition < elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - aiLeftEdge && pageVerticalPosition >= elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - aiLeftEdge || previousPageVerticalPosition > elevationArray[e].offsetLeft - aiRightEdge && pageVerticalPosition <= elevationArray[e].offsetLeft - aiRightEdge) && (isAIFalling = !0, setAIJumpDownAndFallFrame(), $(aiContainerDiv).stop().animate({ bottom: [containerDiv.offsetHeight - groundAndGrassContainer1Div.offsetTop, "easeInCubic"] }, 300, function () { disableIsAIJumpingAndFalling(), setAIStaticFrame() })) } 

function setAIJumpUpFrame() { clearShiftAIFrameTimer(), isAIJumping = !0, aiFramesDiv.style.left = -1 * aiStartJumpFrame * aiOneFrameWidth + "px" } function setAIJumpDownAndFallFrame() { aiFramesDiv.style.left = -1 * aiStopJumpFrame * aiOneFrameWidth + "px" } function setAIStaticFrame() { aiFramesDiv.style.left = "0px" } 

function disableIsAIJumpingAndFalling() { 
    isAIFalling = isAIJumping = !1 
} 

function aiSwimUp() { 
    if (getSwimUpHeight(), 0 < swimUpHeight) { 
        var e = seaFloorDiv.offsetHeight + swimUpHeight + "px", t = 3 * swimUpHeight, i = 6 * swimUpHeight; 
        $(aiContainerDiv).stop().animate({ bottom: e }, t, 
            function () { aiSwimDown(i) }) } 
        
        
} 
function aiSwimDown(e) { 
    $(aiContainerDiv).stop().animate({ bottom: seaFloorDiv.offsetHeight + "px" }, e, function () { setAIStaticFrame() }), aiContainerDiv.offsetTop + aiContainerDiv.offsetHeight <= containerDiv.offsetHeight - seaFloorDiv.offsetHeight - minimumVerticalDistanceToTriggerAISwimDownFrame ? aiFramesDiv.style.left = -1 * aiSwimDownFrame * aiOneFrameWidth + "px" : setAIStaticFrame() } 

function animateAIEyes() { 
    clearInterval(blinkAIEyesTimer), blinkAIEyesTimer = setInterval(function () { blinkAIEyes() }, 4e3) } function blinkAIEyes() { "not moving 2" != layersMovement && ($(aiEyesCloseDiv).fadeTo(0, 1), $(aiEyesCloseDiv).stop().delay(300).animate({ opacity: 0 }, 0, function () { })) } 
function hideAIEyesClose() { $(aiEyesCloseDiv).fadeTo(0, 0) } 

function getSwimUpHeight() { swimUpHeight = Math.abs(deltaPageVerticalPosition); var e = sea1Div.offsetHeight - aiDiv.offsetHeight; e < swimUpHeight && (swimUpHeight = e) } 

function positionVerticalLayersHorizontally() { for (var e = 0; e < layerVerticalArray.length; e++)layerVerticalArray[e].style.left = layerHorizontalArray[e].offsetLeft + layerHorizontalArray[e].offsetWidth - containerDiv.offsetWidth + "px" } 

function positionBalloonAndAIContainerHorizontally() { var e = pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1] - (layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth); aiMaxHorizontalDistance = .5 * containerDiv.offsetWidth + 250; var t = .5 * containerDiv.offsetWidth + e; aiMaxHorizontalDistance <= t && (t = aiMaxHorizontalDistance); var i = .5 * containerDiv.offsetWidth + 50, n = .5 * (containerDiv.offsetWidth - balloonDiv.offsetWidth) + e; i <= n && (n = i), "vertical" == layersMovement ? (balloonDiv.style.left = n + "px", aiContainerDiv.style.left = t + "px") : "not moving 1" == layersMovement || "not moving 2" == layersMovement ? (aiContainerDiv.style.left = t + pageVerticalPosition - (pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenAIAndBalloon) + "px", balloonDiv.style.left = n + "px") : (balloonDiv.style.left = layerHorizontalArray[layerHorizontalArray.length - 1].offsetLeft + layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - .5 * (containerDiv.offsetWidth + balloonDiv.offsetWidth) + "px", aiContainerDiv.style.left = "50%") } 

function positionBalloonVertically() { balloonDiv.style.bottom = .2 * containerDiv.offsetHeight + "px" } 

function setLayersMovement() { layersMovement = pageVerticalPosition * layerHorizontalSpeedArray[layerHorizontalSpeedArray.length - 1] <= layerHorizontalArray[layerHorizontalArray.length - 1].offsetWidth - containerDiv.offsetWidth ? "horizontal" : pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight - distanceBetweenAIAndBalloon && pageVerticalPosition < pageDiv.offsetHeight - containerDiv.offsetHeight ? "not moving 1" : pageVerticalPosition >= pageDiv.offsetHeight - containerDiv.offsetHeight ? "not moving 2" : "vertical" } 

function orientAI() { 
    0 < deltaPageVerticalPosition && (aiFramesDiv.style.top = "0px", aiEyesCloseDiv.style.left = "90px"), deltaPageVerticalPosition < 0 && (aiFramesDiv.style.top = "-200px", aiEyesCloseDiv.style.left = "55px") } 

function storeDivs() { 
    for (var e = document.getElementsByTagName("div"), t = 0; t < e.length; t++)
        "fish" == e[t].getAttribute("class") && fishArray.push(e[t]), "fish-eyes" == e[t].getAttribute("class") && fishEyeArray.push(e[t]), "crab" == e[t].getAttribute("class") && crabArray.push(e[t]), "crab-eyes" == e[t].getAttribute("class") && crabEyeArray.push(e[t]), "turtle" == e[t].getAttribute("class") && turtleArray.push(e[t]), "turtle-eyes" == e[t].getAttribute("class") && turtleEyeArray.push(e[t]), ("nba-board-blue" == e[t].getAttribute("class") || "nba-board-red" == e[t].getAttribute("class")) && nbaBoardArray.push(e[t]), "elevation" == e[t].getAttribute("class") && elevationArray.push(e[t]), "plant" == e[t].getAttribute("class") && plantArray.push(e[t]), "building" == e[t].getAttribute("class") && buildingArray.push(e[t]), ("building-enemy-face-a-eyes" == e[t].getAttribute("class") || "building-enemy-face-b-eyes" == e[t].getAttribute("class")) && buildingEnemyFaceEyeArray.push(e[t]), ("building-leg-frame-a" == e[t].getAttribute("class") || "building-leg-frame-b" == e[t].getAttribute("class")) && buildingLegFrameArray.push(e[t]), ("building-leg-container-a" == e[t].getAttribute("class") || "building-leg-container-b" == e[t].getAttribute("class")) && buildingLegContainerArray.push(e[t]), "contact-confirmation-container" == e[t].getAttribute("class") && contactConfirmationContainerArray.push(e[t]), "experience-text-container" == e[t].getAttribute("class") && experienceTextContainerArray.push(e[t]), "chain-block-and-string-container" == e[t].getAttribute("class") && chainBlockAndStringContainerArray.push(e[t]), "layer-horizontal" == e[t].getAttribute("class") && layerHorizontalArray.push(e[t]), "layer-vertical" == e[t].getAttribute("class") && layerVerticalArray.push(e[t]), ("algae-a" == e[t].getAttribute("class") || "algae-b" == e[t].getAttribute("class") || "title-skills-class" == e[t].getAttribute("class")) && seaFloorFrontObjectArray.push(e[t]), ("coral" == e[t].getAttribute("class") || "coral-big" == e[t].getAttribute("class")) && seaFloorBackObjectArray.push(e[t]), "squid-hand-close" == e[t].getAttribute("class") && squidHandCloseArray.push(e[t]), "squid-hand-open" == e[t].getAttribute("class") && squidHandOpenArray.push(e[t]), "firework" == e[t].getAttribute("class") && fireworkArray.push(e[t]) }
        
function animatePlants() { 
    for (var e = 0; e < plantArray.length; e++)$(plantArray[e]).stop().delay(300 * e).animate({ top: [plantTargetTopObjectArray[e].offsetTop, "easeOutElastic"] }, 800, function () { }) } 
    
function positionPlants() { for (var e = 0; e < plantArray.length; e++)plantArray[e].style.top = 1 == canAnimatePlantInformation ? "100%" : plantTargetTopObjectArray[e].offsetTop + "px" } 

function animateBuildings() { clearInterval(buildingLegsTimer), buildingLegsTimer = setInterval(function () { animateBuildingsLegs() }, 200); for (var e = 0; e < buildingArray.length; e++)$(buildingArray[e]).stop().delay(300 * e).animate({ left: [buildingTargetLeftArray[e], "easeOutCubic"] }, 1e3, function () { }) } 

function animateBuildingsLegs() { buildingCounter += 1; for (var e = 0; e < buildingArray.length; e++) { if (buildingArray[buildingArray.length - 1].offsetLeft == buildingTargetLeftArray[buildingTargetLeftArray.length - 1]) return buildingLegFrameArray[buildingLegFrameArray.length - 1].style.left = "0px", clearInterval(buildingLegsTimer), void (buildingCounter = 0); buildingArray[e].offsetLeft > buildingTargetLeftArray[e] && buildingArray[e].offsetLeft < buildingEarlyPositionArray[e] ? buildingLegFrameArray[e].style.left = -1 * buildingLegContainerArray[e].offsetWidth * (buildingCounter % 2) + "px" : buildingLegFrameArray[e].style.left = "0px" } } 

function animateBuildingsEyes() { clearInterval(buildingBlinkTimer), buildingBlinkTimer = setInterval(function () { blinkBuildings() }, 4e3) } 

function blinkBuildings() { if (pageVerticalPosition + .5 * containerDiv.offsetWidth < about2ContainerDiv.offsetLeft || pageVerticalPosition + .5 * containerDiv.offsetWidth > about2ContainerDiv.offsetLeft + about2ContainerDiv.offsetWidth) clearInterval(buildingBlinkTimer); else { var e = Math.floor(Math.random() * buildingArray.length); $(buildingEnemyFaceEyeArray[e]).fadeTo(0, 1), $(buildingEnemyFaceEyeArray[e]).stop().delay(300).animate({ opacity: 0 }, 0, function () { }) } } function positionBuildings() { for (var e = 0; e < buildingArray.length; e++)buildingArray[e].style.left = buildingEarlyPositionArray[e] + "px" } 

function nbaBoardsJump() { for (var e = 0; e < nbaBoardArray.length; e++)$(nbaBoardArray[e]).stop().delay(100 * e).animate({ bottom: [200, "easeOutCubic"] }, 300, function () { nbaBoardsFall() }) } 

function nbaBoardsFall() { $(nbaBoardArray[nbaBoardsCounter]).stop().animate({ bottom: [0, "easeInCubic"] }, 300, function () { }), (nbaBoardsCounter += 1) >= nbaBoardArray.length && (nbaBoardsCounter = 0) } 

function positionNbaBoard() { for (var e = 0; e < nbaBoardArray.length; e++)nbaBoardArray[e].style.bottom = "0px" } 

function animateNbaBoardsContinuously() { clearInterval(nbaBoardsAnimationTimer), nbaBoardsAnimationTimer = setInterval(function () { nbaBoardsJump() }, 3e3) } 

function animateNbaPlayer() { nbaPlayerRun() } 

function nbaPlayerRun() { clearInterval(nbaPlayerTimer), nbaPlayerTimer = setInterval(function () { animateNbaPlayerRun() }, 200), $(nbaPlayerContainerDiv).stop().animate({ left: "690px" }, 1e3, function () { nbaPlayerJump() }) } 

function animateNbaPlayerRun() { shiftNbaPlayerFrame((nbaPlayerCounter += 1) % 2) } function nbaPlayerJump() { clearInterval(nbaPlayerTimer), nbaPlayerCounter = 0, shiftNbaPlayerFrame(2), $(nbaPlayerContainerDiv).stop().animate({ left: "570px", bottom: [200, "easeOutCubic"] }, 300, function () { nbaPlayerFall() }) } 

function nbaPlayerFall() { shiftNbaPlayerFrame(3), shakeRim(), bounceBall(), nbaBoardsJump(), animateNbaBoardsContinuously(), $(nbaPlayerContainerDiv).stop().animate({ left: "450px", bottom: [0, "easeInCubic"] }, 300, function () { }) } 

function shiftNbaPlayerFrame(e) { nbaPlayerFrameDiv.style.left = -300 * e + "px" } 

function shakeRim() { $(nbaRimContainerDiv).stop().animate({ bottom: [-50, "easeOutCubic"] }, 100, function () { moveRimUp() }) } 

function moveRimUp() { $(nbaRimContainerDiv).stop().animate({ bottom: [0, "easeOutElastic"] }, 500, function () { }) } 

function bounceBall() { nbaBallDiv.style.opacity = "1", $(nbaBallDiv).stop().animate({ bottom: [0, "easeOutBounce"] }, 1200, function () { }) } function positionNbaElements() { stopAllNbaAnimation(), setAllNbaCounter(), clearAllNbaTimer(), positionNbaBoard(), positionNbaPlayerContainer(), hideNbaBall() } 

function positionNbaPlayerContainer() { nbaPlayerContainerDiv.style.left = "1400px", nbaPlayerContainerDiv.style.bottom = "0px" } 

function hideNbaBall() { $(nbaBallDiv).fadeTo(0, 0), nbaBallDiv.style.left = "415px", nbaBallDiv.style.bottom = "250px" } 

function animateNbaPlayerEyes() { clearInterval(blinkNbaPlayerTimer), blinkNbaPlayerTimer = setInterval(function () { blinkNbaPlayer() }, 4e3) } 

function blinkNbaPlayer() { pageVerticalPosition + .5 * containerDiv.offsetWidth < about3ContainerDiv.offsetLeft || pageVerticalPosition + .5 * containerDiv.offsetWidth > about3ContainerDiv.offsetLeft + about3ContainerDiv.offsetWidth ? clearInterval(blinkNbaPlayerTimer) : ($(nbaPlayerEyesDiv).fadeTo(0, 1), $(nbaPlayerEyesDiv).stop().delay(300).animate({ opacity: 0 }, 0, function () { })) } 

function clearAllNbaTimer() { clearInterval(blinkNbaPlayerTimer), clearInterval(nbaBoardsAnimationTimer), clearInterval(nbaPlayerTimer) } 

function setAllNbaCounter() { nbaPlayerCounter = nbaBoardsCounter = 0 } 

function stopAllNbaAnimation() { for (var e = 0; e < nbaBoardArray.length; e++)$(nbaBoardArray[e]).stop(!0, !1); $(nbaPlayerContainerDiv).stop(!0, !1) } 

function positionSeaAnimals(e, t, i, n) { for (var a = e, o = t, r = i, l = n, s = 0, c = 0; c < o.length; c++)for (var f = 0; f < o[c]; f++)a[s].style.left = seaAnimalSwimDistance + f * r + "px", a[s].style.top = c * l + "px", s += 1 } 

function animateSeaAnimals(e) { var t = e; t == fishArray && (isFishStillAnimating = !0), t == crabArray && (isCrabStillAnimating = !0), t == turtleArray && (isTurtleStillAnimating = !0); for (var i = 0; i < t.length; i++)$(t[i]).stop().delay(100 * i).animate({ left: [t[i].offsetLeft - seaAnimalSwimDistance, "easeOutCubic"] }, 600, function () { disableIsSeaAnimalStillAnimating(t) }) } 

function disableIsSeaAnimalStillAnimating(e) { var t = e; t == fishArray && (fishAnimateNumber >= t.length - 1 ? (isFishStillAnimating = !1, fishAnimateNumber = 0) : fishAnimateNumber += 1), t == crabArray && (crabAnimateNumber >= t.length - 1 ? (isCrabStillAnimating = !1, crabAnimateNumber = 0) : crabAnimateNumber += 1), t == turtleArray && (turtleAnimateNumber >= t.length - 1 ? (isTurtleStillAnimating = !1, turtleAnimateNumber = 0) : turtleAnimateNumber += 1) } 

function animateAIRunSwim() { 1 == canAnimateAIRunSwim && 0 == isAIJumping && 0 == isAIFalling && "vertical" != layersMovement && (disableAnimateAIRunSwim(), clearInterval(shiftAIFrameTimer), shiftAIFrameTimer = setInterval(function () { shiftAIFrame() }, shiftAIFrameTimeInterval)) } 

function shiftAIFrame() { if (1 == isAIFalling) return clearShiftAIFrameTimer(), void setAIJumpDownAndFallFrame(); if (1 == isAISwimming && 1 == isAIBelowSeaLevel ? (aiStartFrame = aiStartSwimFrame, aiStopFrame = aiStopSwimFrame) : (aiStartFrame = aiStartRunFrame, aiStopFrame = aiStopRunFrame), aiFramesDiv.style.left = -1 * aiOneFrameWidth * (aiStartFrame + counter) + "px", aiStopFrame < aiStartFrame + counter + switcher && (switcher *= -1), aiStartFrame + counter + switcher == aiStartFrame && (pageVerticalPositionWhenAnimateAI1 = pageVerticalPosition), aiStartFrame + counter + switcher < aiStartFrame) { if (pageVerticalPositionWhenAnimateAI1 == (pageVerticalPositionWhenAnimateAI2 = pageVerticalPosition)) return clearShiftAIFrameTimer(), void ("not moving 2" == layersMovement && aiHandsUp()); switcher *= -1 } counter += switcher } 

function clearShiftAIFrameTimer() { clearInterval(shiftAIFrameTimer), (0 == isAISwimming || 1 == isAISwimming && aiContainerDiv.offsetTop + aiContainerDiv.offsetHeight >= containerDiv.offsetHeight - seaFloorDiv.offsetHeight) && setAIStaticFrame(), counter = 0, switcher = 1, enableAnimateAIRunSwim() } 

function enableAnimateAIRunSwim() { canAnimateAIRunSwim = !0 } 

function disableAnimateAIRunSwim() { canAnimateAIRunSwim = !1 } 

function positionChainBlockAndStringContainer() { for (var e = 0; e < chainBlockAndStringContainerArray.length; e++)0 == e && (canAnimateBossInformation = canAnimateRobotInformation), 1 == e && (canAnimateBossInformation = canAnimateSquidInformation), 2 == e && (canAnimateBossInformation = canAnimateAlienInformation), chainBlockAndStringContainerArray[e].style.left = .5 * experienceTextContainerArray[e].offsetWidth - .5 * chainBlockAndStringContainerArray[e].offsetWidth + "px", chainBlockAndStringContainerArray[e].style.bottom = 1 == canAnimateBossInformation ? .8 * containerDiv.offsetHeight + experienceTextContainerArray[e].offsetHeight + "px" : experienceTextContainerDistanceFromFloor + experienceTextContainerArray[e].offsetHeight + "px" } 
function animateChainBlockAndStringContainer(e) { $(chainBlockAndStringContainerArray[e]).stop().animate({ bottom: [experienceTextContainerDistanceFromFloor + experienceTextContainerArray[e].offsetHeight, "easeOutCubic"] }, 1e3, function () { }) } 

function positionExperienceTextContainer() { for (var e = 0; e < experienceTextContainerArray.length; e++)0 == e && (canAnimateBossInformation = canAnimateRobotInformation), 1 == e && (canAnimateBossInformation = canAnimateSquidInformation), 2 == e && (canAnimateBossInformation = canAnimateAlienInformation), experienceTextContainerArray[e].style.bottom = 1 == canAnimateBossInformation ? .8 * containerDiv.offsetHeight + "px" : experienceTextContainerDistanceFromFloor + "px" } 

function animateExperienceTextContainer(e) { $(experienceTextContainerArray[e]).stop().animate({ bottom: [experienceTextContainerDistanceFromFloor, "easeOutCubic"] }, 1e3, function () { }) } 

function positionExperience1Elements() { robotDiv.style.left = experience1ContainerDiv.offsetWidth + "px", $(piechartRobotTextGraphic1Div).fadeTo(0, 0), $(piechartRobotTextGraphic2Div).fadeTo(0, 0), $(piechartRobotTextAnimation1Div).fadeTo(0, 0), $(piechartRobotTextAnimation2Div).fadeTo(0, 0), $(piechartRobotTextCode1Div).fadeTo(0, 0), $(piechartRobotTextCode2Div).fadeTo(0, 0), "internet explorer" == browserName && browserVersion <= 8 || $(piechartRobotFrontDiv).fadeTo(0, 0) } 

function positionExperience2Elements() { squidDiv.style.left = experience2ContainerDiv.offsetWidth + "px", $(piechartSquidTextGraphic1Div).fadeTo(0, 0), $(piechartSquidTextGraphic2Div).fadeTo(0, 0), $(piechartSquidTextAnimation1Div).fadeTo(0, 0), $(piechartSquidTextAnimation2Div).fadeTo(0, 0), $(piechartSquidTextCode1Div).fadeTo(0, 0), $(piechartSquidTextCode2Div).fadeTo(0, 0), "internet explorer" == browserName && browserVersion <= 8 || $(piechartSquidFrontDiv).fadeTo(0, 0) } 

function positionExperience3Elements() { alienDiv.style.left = experience3ContainerDiv.offsetWidth + "px", $(piechartAlienTextGraphic1Div).fadeTo(0, 0), $(piechartAlienTextGraphic2Div).fadeTo(0, 0), $(piechartAlienTextAnimation1Div).fadeTo(0, 0), $(piechartAlienTextAnimation2Div).fadeTo(0, 0), $(piechartAlienTextCode1Div).fadeTo(0, 0), $(piechartAlienTextCode2Div).fadeTo(0, 0), "internet explorer" == browserName && browserVersion <= 8 || $(piechartAlienFrontDiv).fadeTo(0, 0) } 

function animateInformationAndEnemiesElements() { if ("horizontal" == layersMovement) { if (0 == isAISwimming) for (var e = 0; e < landInformationContainerArray.length; e++)(previousPageVerticalPosition + .5 * containerDiv.offsetWidth < landInformationContainerArray[e].offsetLeft || previousPageVerticalPosition + .5 * containerDiv.offsetWidth > landInformationContainerArray[e].offsetLeft + landInformationContainerArray[e].offsetWidth) && pageVerticalPosition + .5 * containerDiv.offsetWidth > landInformationContainerArray[e].offsetLeft && pageVerticalPosition + .5 * containerDiv.offsetWidth < landInformationContainerArray[e].offsetLeft + landInformationContainerArray[e].offsetWidth && (landInformationContainerArray[e] == about1ContainerDiv && 1 == canAnimatePlantInformation && (animatePlants(), canAnimatePlantInformation = !1), landInformationContainerArray[e] == about2ContainerDiv && (animateBuildingsEyes(), 1 == canAnimateBuildingInformation && (animateBuildings(), canAnimateBuildingInformation = !1)), landInformationContainerArray[e] == about3ContainerDiv && (animateNbaPlayerEyes(), 1 == canAnimateNbaInformation && (animateNbaPlayer(), canAnimateNbaInformation = !1)), landInformationContainerArray[e] == experience1ContainerDiv && (0 == canAnimateRobotInformation ? animateRobotHands() : (animateRobot(), animateExperienceTextContainer(0), animateChainBlockAndStringContainer(0), canAnimateRobotInformation = !1)), landInformationContainerArray[e] == experience2ContainerDiv && (0 == canAnimateSquidInformation ? animateSquidHands() : (animateSquid(), animateExperienceTextContainer(1), animateChainBlockAndStringContainer(1), canAnimateSquidInformation = !1)), landInformationContainerArray[e] == experience3ContainerDiv && (0 == canAnimateAlienInformation ? animateAlienHand() : (animateAlien(), animateExperienceTextContainer(2), animateChainBlockAndStringContainer(2), canAnimateAlienInformation = !1))); if (1 == isAISwimming) for (e = 0; e < seaInformationContainerArray.length; e++)(previousPageVerticalPosition + .5 * containerDiv.offsetWidth < sea1Div.offsetLeft + seaInformationContainerArray[e].offsetLeft || previousPageVerticalPosition + .5 * containerDiv.offsetWidth > sea1Div.offsetLeft + seaInformationContainerArray[e].offsetLeft + seaInformationContainerArray[e].offsetWidth) && pageVerticalPosition + .5 * containerDiv.offsetWidth > sea1Div.offsetLeft + seaInformationContainerArray[e].offsetLeft && pageVerticalPosition + .5 * containerDiv.offsetWidth < sea1Div.offsetLeft + seaInformationContainerArray[e].offsetLeft + seaInformationContainerArray[e].offsetWidth && (seaInformationContainerArray[e] == skill1ContainerDiv && (makeSeaAnimalsBlinking(fishEyeArray), 1 == canAnimateFishInformation && (animateSeaAnimals(fishArray), canAnimateFishInformation = !1)), seaInformationContainerArray[e] == skill2ContainerDiv && (makeSeaAnimalsBlinking(crabEyeArray), 1 == canAnimateCrabInformation && (animateSeaAnimals(crabArray), canAnimateCrabInformation = !1)), seaInformationContainerArray[e] == skill3ContainerDiv && (makeSeaAnimalsBlinking(turtleEyeArray), 1 == canAnimateTurtleInformation && (animateSeaAnimals(turtleArray), canAnimateTurtleInformation = !1))) } } 

function animateRobot() { 
    $(robotDiv).stop().animate({ left: "420px" }, 1e3, function () { animatePiechartAolFront(), animateRobotHands() }) 
} 

function animateRobotHands() { 
    spinRobotHands(), clearInterval(animateRobotHandsTimer), animateRobotHandsTimer = setInterval(function () { spinRobotHands() }, 4e3) 
} 

function spinRobotHands() { 
    clearInterval(spinRobotHandsTimer), spinRobotHandsTimer = setInterval(function () { changeRobotHands() }, 100) 
} 

function changeRobotHands() { 
    if (robotHandChildrenLength <= changeRobotHandsCounter) changeRobotHandsCounter = 0, clearInterval(spinRobotHandsTimer), setRobotHandsToDefault(), (pageVerticalPosition + .5 * containerDiv.offsetWidth < experience1ContainerDiv.offsetLeft || pageVerticalPosition + .5 * containerDiv.offsetWidth > experience1ContainerDiv.offsetLeft + experience1ContainerDiv.offsetWidth) && clearInterval(animateRobotHandsTimer); else for (var e = 0; e < robotHandChildrenLength; e++)e == changeRobotHandsCounter ? setRobotHandsToOpaque(e) : setRobotHandsToTransparent(e); changeRobotHandsCounter += 1 
} 

function setRobotHandsToDefault() { 
    for (var e = 0; e < robotHandChildrenLength; e++)0 == e ? setRobotHandsToOpaque(e) : setRobotHandsToTransparent(e) 
} 

function setRobotHandsToOpaque(e) { 
    robotHandLeftDiv.children[e].style.opacity = 1, robotHandLeftDiv.children[e].style.filter = "alpha(opacity=100)", robotHandRightDiv.children[e].style.opacity = 1, robotHandRightDiv.children[e].style.filter = "alpha(opacity=100)" 
} 

function setRobotHandsToTransparent(e) { 
    robotHandLeftDiv.children[e].style.opacity = 0, robotHandLeftDiv.children[e].style.filter = "alpha(opacity=0)", robotHandRightDiv.children[e].style.opacity = 0, robotHandRightDiv.children[e].style.filter = "alpha(opacity=0)" 
} 

function animateSquid() { 
    $(squidDiv).stop().animate({ left: "430px" }, 1e3, function () { animatePiechartIncognitoFront(), animateSquidHands() }) 
} 
function animateSquidHands() { 
    moveSquidHands(), clearInterval(animateSquidHandsTimer), animateSquidHandsTimer = setInterval(function () { moveSquidHands() }, 4e3) 
} 
    
function moveSquidHands() { clearInterval(moveSquidHandsTimer), moveSquidHandsTimer = setInterval(function () { openAndCloseSquidHands() }, 200) } 

function openAndCloseSquidHands() { 
        
        8 <= openAndCloseSquidHandsCounter ? (openAndCloseSquidHandsCounter = 0, clearInterval(moveSquidHandsTimer), openSquidHands(), (pageVerticalPosition + .5 * containerDiv.offsetWidth < experience2ContainerDiv.offsetLeft || pageVerticalPosition + .5 * containerDiv.offsetWidth > experience2ContainerDiv.offsetLeft + experience2ContainerDiv.offsetWidth) && clearInterval(animateSquidHandsTimer)) : openAndCloseSquidHandsCounter % 2 == 0 ? openSquidHands() : closeSquidHands(), openAndCloseSquidHandsCounter += 1 
} 
    
function openSquidHands() { 
    for (var e = 0; e < squidHandOpenArray.length; e++)squidHandOpenArray[e].style.opacity = 1, squidHandOpenArray[e].style.filter = "alpha(opacity=100)"; for (e = 0; e < squidHandCloseArray.length; e++)squidHandCloseArray[e].style.opacity = 0, squidHandCloseArray[e].style.filter = "alpha(opacity=0)" 
} 

function closeSquidHands() { 
    for (var e = 0; e < squidHandOpenArray.length; e++)squidHandOpenArray[e].style.opacity = 0, squidHandOpenArray[e].style.filter = "alpha(opacity=0)"; for (e = 0; e < squidHandCloseArray.length; e++)squidHandCloseArray[e].style.opacity = 1, squidHandCloseArray[e].style.filter = "alpha(opacity=100)" 
} 

function animateAlienHand() { 
    clearInterval(animateAlienHandsTimer), animateAlienHandsTimer = setInterval(function () { rotateAlienHands() }, 100) 
} 

function rotateAlienHands() { 
    (alienSteerPreviousAngle = alienSteerAngle) < (alienSteerAngle += alienSteerAngleIncrement) ? alienSteerAngleLimit < alienSteerAngle && (alienSteerAngleIncrement *= -1, alienSteerAngleLimit *= -1) : alienSteerAngle < alienSteerAngleLimit && (alienSteerAngleIncrement *= -1, alienSteerAngleLimit *= -1), 0 == alienSteerAngle && (pageVerticalPosition + .5 * containerDiv.offsetWidth < experience3ContainerDiv.offsetLeft || pageVerticalPosition + .5 * containerDiv.offsetWidth > experience3ContainerDiv.offsetLeft + experience3ContainerDiv.offsetWidth) ? (clearInterval(animateAlienHandsTimer), alienSteerDiv.style.webkitTransform = "rotate(0deg)", alienSteerDiv.style.MozTransform = "rotate(0deg)", alienSteerDiv.style.OTransform = "rotate(0deg)", alienSteerDiv.style.msTransform = "rotate(0deg)", alienSteerDiv.style.transform = "rotate(0deg)") : (alienSteerDiv.style.webkitTransform = "rotate(" + alienSteerAngle + "deg)", alienSteerDiv.style.MozTransform = "rotate(" + alienSteerAngle + "deg)", alienSteerDiv.style.OTransform = "rotate(" + alienSteerAngle + "deg)", alienSteerDiv.style.msTransform = "rotate(" + alienSteerAngle + "deg)", alienSteerDiv.style.transform = "rotate(" + alienSteerAngle + "deg)") 
} 
function animateAlien() { 
    $(alienDiv).stop().animate({ left: "450px" }, 1e3, function () { animatePiechartFoxnewsFront(), animateAlienHand() }) 
} 

function animatePiechartAolFront() { 
    "internet explorer" == browserName && browserVersion <= 8 ? animatePiechartAolText() : $(piechartRobotFrontDiv).stop().animate({ opacity: 1 }, 500, function () { animatePiechartAolText() }) 
} 

function animatePiechartIncognitoFront() { 
    "internet explorer" == browserName && browserVersion <= 8 ? animatePiechartIncognitoText() : $(piechartSquidFrontDiv).stop().animate({ opacity: 1 }, 500, function () { animatePiechartIncognitoText() }) 
} 

function animatePiechartFoxnewsFront() { 
    "internet explorer" == browserName && browserVersion <= 8 ? animatePiechartFoxnewsText() : $(piechartAlienFrontDiv).stop().animate({ opacity: 1 }, 500, function () { animatePiechartFoxnewsText() }) 
} 

function animatePiechartAolText() { 
    animatePiechartAolTextCode(), animatePiechartAolTextGraphic(), animatePiechartAolTextAnimation() 
} 

function animatePiechartAolTextCode() { 
    $(piechartRobotTextCode1Div).stop().animate({ opacity: 1 }, 1e3, function () { }), $(piechartRobotTextCode2Div).stop().animate({ opacity: 1 }, 1e3, function () { }) 
} 

function animatePiechartAolTextGraphic() { 
    $(piechartRobotTextGraphic1Div).stop().delay(300).animate({ opacity: 1 }, 1e3, function () { }), $(piechartRobotTextGraphic2Div).stop().delay(300).animate({ opacity: 1 }, 1e3, function () { }) 
} 

function animatePiechartAolTextAnimation() { 
    $(piechartRobotTextAnimation1Div).stop().delay(600).animate({ opacity: 1 }, 1e3, function () { }), $(piechartRobotTextAnimation2Div).stop().delay(600).animate({ opacity: 1 }, 1e3, function () { }) 
} 

function animatePiechartIncognitoText() { 
    animatePiechartIncognitoTextCode(), animatePiechartIncognitoTextAnimation(), animatePiechartIncognitoTextGraphic() } 

function animatePiechartIncognitoTextCode() { 
    
$(piechartSquidTextCode1Div).stop().animate({ opacity: 1 }, 1e3, function () { }), $(piechartSquidTextCode2Div).stop().animate({ opacity: 1 }, 1e3, function () { }) 
} 

function animatePiechartIncognitoTextAnimation() { 
    
    $(piechartSquidTextAnimation1Div).stop().delay(300).animate({ opacity: 1 }, 1e3, function () { }), $(piechartSquidTextAnimation2Div).stop().delay(300).animate({ opacity: 1 }, 1e3, function () { }) 
} 
    
    
function animatePiechartIncognitoTextGraphic() { 
    $(piechartSquidTextGraphic1Div).stop().delay(600).animate({ opacity: 1 }, 1e3, function () { }), $(piechartSquidTextGraphic2Div).stop().delay(600).animate({ opacity: 1 }, 1e3, function () { }) 
} 
    
    
function animatePiechartFoxnewsText() { 
    animatePiechartFoxnewsTextGraphic(), animatePiechartFoxnewsTextAnimation(), animatePiechartFoxnewsTextCode() 
} 
    
    
function animatePiechartFoxnewsTextCode() {     
    $(piechartAlienTextCode1Div).stop().animate({ opacity: 1 }, 1e3, function () { }), $(piechartAlienTextCode2Div).stop().animate({ opacity: 1 }, 1e3, function () { }) 
} 

function animatePiechartFoxnewsTextAnimation() { $(piechartAlienTextAnimation1Div).stop().delay(300).animate({ opacity: 1 }, 1e3, function () { }), $(piechartAlienTextAnimation2Div).stop().delay(300).animate({ opacity: 1 }, 1e3, function () { }) 
} 
        
function animatePiechartFoxnewsTextGraphic() { 
    $(piechartAlienTextGraphic1Div).stop().delay(600).animate({ opacity: 1 }, 1e3, function () { }), $(piechartAlienTextGraphic2Div).stop().delay(600).animate({ opacity: 1 }, 1e3, function () { }) 
} 
        
function createBubble() { 
    clearInterval(bubbleTimer), bubbleTimer = setInterval(function () { animateBubble() }, 3e3) 
} 
function animateBubble() { 
    var e = aiContainerDiv.offsetTop - (sea1Div.offsetTop - shiftUpLayerHorizontalDistance); positionBubble(e), showBubble(), $(bubbleDiv).stop().animate({ top: "0px" }, 2 * e, function () { hideBubble() }) 
} 
function hideBubble() { 
    $(bubbleDiv).fadeTo(0, 0) 
} 
function showBubble() { 
    $(bubbleDiv).fadeTo(0, 1) 
} 
function positionBubble(e) { 
    bubbleDiv.style.left = pageVerticalPosition + .5 * containerDiv.offsetWidth - sea1Div.offsetLeft + "px", bubbleDiv.style.top = e + "px" 
} 
function blinkSeaAnimals(e) { 
    for (var t = e, i = new Array, n = Math.ceil(5 * Math.random()), a = 0; a < n; a++) { var o = Math.floor(Math.random() * e.length); i.push(t[o]) } for (a = 0; a < i.length; a++)$(i[a]).fadeTo(0, 1), $(i[a]).stop().delay(300).animate({ opacity: 0 }, 0, function () { }) 
} 

function makeSeaAnimalsBlinking(e) { 
    clearInterval(blinkSeaAnimalsTimer), blinkSeaAnimalsTimer = setInterval(function () { blinkSeaAnimals(e) }, 3e3) 
} 

function positionContactContainer() { 
    contactContainerDiv.style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px", contactContainerDiv.style.left = layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px" 
} 
function positionFireworksContainer() { 
    fireworksContainerDiv.style.top = layerVerticalArray[layerVerticalArray.length - 1].offsetTop + "px", fireworksContainerDiv.style.left = layerVerticalArray[layerVerticalArray.length - 1].offsetLeft + "px" 
} function positionSocialContainer() { 
    1 == canAnimateSocialContainer ? (setSocialContainerOpacity(0), socialContainerDiv.style.top = "80%") : socialContainerDiv.style.top = "0px" 
} 
function animateSocialContainer() { 
    1 == canAnimateSocialContainer && ($(socialContainerDiv).stop().animate({ top: [0, "easeOutCubic"] }, 1e3, function () { }), setSocialContainerOpacity(1), canAnimateSocialContainer = !1) 
} 
function setSocialContainerOpacity(e) { 
    1 < e && (e = 1), e < 0 && (e = 0); for (var t = $(socialContainerDiv).children().length, i = 0; i < t; i++)$(socialContainerDiv.children[i]).fadeTo(0, e); var n = $(socialContainerDiv.children[1]).children().length; for (i = 0; i < n; i++)$(socialContainerDiv.children[1].children[i]).fadeTo(0, e) } 
function happyAI() { 0 == isAIHappy && (clearInterval(happyAITimer), happyAITimer = setInterval(function () { aiHandsUp() }, 3e3), isAIHappy = !0) } 
function clearHappyAITimer() { 1 == isAIHappy && (clearInterval(happyAITimer), isAIHappy = !1) } 
function aiHandsUp() { aiFramesDiv.style.left = "-1600px", setTimeout(function () { setAIStaticFrame() }, 1e3) } 
function positionSplashContainer() { splashContainerDiv.style.left = .5 * (containerDiv.offsetWidth - splashContainerDiv.offsetWidth) + "px" } 
function positionAIContainerVertically() { 1 == isPreloadShiftUpAnimationFinish && ($(aiContainerDiv).stop(!0, !1), setAIStaticFrame(), 1 == isAISwimming ? positionAIAtSeaFloorLevel() : (checkElevationNumberBelowAI(), null != elevationNumberBelowAI ? aiContainerDiv.style.bottom = containerDiv.offsetHeight - elevationArray[elevationNumberBelowAI].offsetTop + "px" : positionAIAtGroundLevel())) } function positionAIAtGroundLevel() { aiContainerDiv.style.bottom = .2 * containerDiv.offsetHeight + "px" } function positionAIAtSeaFloorLevel() { aiContainerDiv.style.bottom = seaFloorDiv.offsetHeight + "px" } function checkElevationNumberBelowAI() { for (var e = 0; e < elevationArray.length; e++) { if (pageVerticalPosition < elevationArray[e].offsetLeft + elevationArray[e].offsetWidth - aiLeftEdge && pageVerticalPosition > elevationArray[e].offsetLeft - aiRightEdge) { elevationNumberBelowAI = e; break } elevationNumberBelowAI = null } } function animateWaterfall() { clearInterval(waterfallTimer), waterfallTimer = setInterval(function () { switchWaterfallTexture() }, 1e3) } function switchWaterfallTexture() { $(waterfall2Div).fadeTo(0, 0), $(waterfall2Div).stop().delay(500).animate({ opacity: 1 }, 0, function () { }) } function positionSeaFloorObjectsVertically() { for (var e = 0; e < seaFloorFrontObjectArray.length; e++)seaFloorFrontObjectArray[e].offsetHeight > sea1Div.offsetHeight ? seaFloorFrontObjectArray[e].style.bottom = -1 * (seaFloorFrontObjectArray[e].offsetHeight - sea1Div.offsetHeight) + "px" : seaFloorFrontObjectArray[e].style.bottom = "0px"; for (e = 0; e < seaFloorBackObjectArray.length; e++)seaFloorBackObjectArray[e].offsetHeight > sea1Div.offsetHeight ? seaFloorBackObjectArray[e].style.bottom = -.7 * containerDiv.offsetHeight - (seaFloorBackObjectArray[e].offsetHeight - sea1Div.offsetHeight) + "px" : seaFloorBackObjectArray[e].style.bottom = "-70%" } function animateScrollOrSwipeTextContainer() { 1 == canAnimateScrollOrSwipeTextContainer && (canAnimateScrollOrSwipeTextContainer = !1, clearInterval(scrollOrSwipeTextContainerTimer), scrollOrSwipeTextContainerTimer = setInterval(function () { turnOnAndOffScrollOrSwipeTextContainer() }, 1e3)) } function turnOnAndOffScrollOrSwipeTextContainer() { "computer" == deviceName ? ($(scrollOrSwipeTextContainer1Div).fadeTo(0, 1), $(scrollOrSwipeTextContainer1Div).stop().delay(500).animate({ opacity: 0 }, 0, function () { })) : ($(scrollOrSwipeTextContainer2Div).fadeTo(0, 1), $(scrollOrSwipeTextContainer2Div).stop().delay(500).animate({ opacity: 0 }, 0, function () { })) } function hideScrollOrSwipeTextContainer() { 1 == canHideScrollOrSwipeTextContainer && (clearInterval(scrollOrSwipeTextContainerTimer), fadeOutScrollOrSwipeTextContainer(), canHideScrollOrSwipeTextContainer = !1) } function fadeOutScrollOrSwipeTextContainer() { $(scrollOrSwipeTextContainer1Div).fadeTo(0, 0), $(scrollOrSwipeTextContainer2Div).fadeTo(0, 0) } function positionContactConfirmationContainer() { for (var e = 0; e < contactConfirmationContainerArray.length; e++)contactConfirmationContainerArray[e].style.left = "not moving 1" == layersMovement || "not moving 2" == layersMovement ? aiContainerDiv.offsetLeft + "px" : aiMaxHorizontalDistance + "px", contactConfirmationContainerArray[e].style.top = .8 * containerDiv.offsetHeight - 370 + "px" } function hideContactConfirmationContainer() { if (1 == isContactConfirmationContainerVisible) { for (var e = 0; e < contactConfirmationContainerArray.length; e++)for (var t = $(contactConfirmationContainerArray[e]).children().children().length, i = 0; i < t; i++)$(contactConfirmationContainerArray[e].children[0].children[i]).fadeTo(0, 0); isContactConfirmationContainerVisible = !1 } } function showContactConfirmationContainer(e) { for (var t = $(contactConfirmationContainerArray[e]).children().children().length, i = 0; i < t; i++)$(contactConfirmationContainerArray[e].children[0].children[i]).fadeTo(0, 1); isContactConfirmationContainerVisible = !0 } function focusEmail() { emailAddressDiv.focus() } function focusSubject() { emailSubjectDiv.focus() } function focusMessage() { emailMessageDiv.focus() } 
function clearAllInputField() { 
    emailAddressDiv.value = "", emailSubjectDiv.value = "", emailMessageDiv.value = "" } 
function createFireworkSvg() { 
    if (!("internet explorer" == browserName && browserVersion <= 8)) for (var e = 0; e < fireworkArray.length; e++) { var t = document.createElementNS("http://www.w3.org/2000/svg", "svg"); t.setAttribute("version", "1.2"), t.setAttribute("baseProfile", "tiny"), t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), fireworkSvgArray.push(t) } } 

function appendFireworkSvgToContainer() { 
    if (!("internet explorer" == browserName && browserVersion <= 8)) for (var e = 0; e < fireworkArray.length; e++)fireworkArray[e].appendChild(fireworkSvgArray[e]) } 

function drawManyFireworks() { 
    "internet explorer" == browserName && browserVersion <= 8 || 1 == canDrawManyFireworks && (clearInterval(drawFireworkTimer), drawFireworkTimer = setInterval(function () { drawFirework() }, 1e3), canDrawManyFireworks = !1) } 

function drawFirework() { 
    drawFireworkCounter >= fireworkArray.length ? (drawFireworkCounter = 0, clearInterval(drawFireworkTimer)) : (clearInterval(drawOneLayerOfFireworkTimer), drawOneLayerOfFireworkTimer = setInterval(function () { drawOneLayerOfFirework() }, 40)) } 

function drawOneLayerOfFirework() { 
    if (fireworkLayerNumber < fireworkRowNumber) { fireworkLayerNumber += 1; for (var e = 0; e < fireworkColumnNumber; e++) { var t = document.createElementNS("http://www.w3.org/2000/svg", "circle"); t.setAttribute("cx", String(fireworkCenterX + Math.cos(e * fireworkOneRotationAngle) * (fireworkLayerNumber * fireworkOneRadiusDistance))), t.setAttribute("cy", String(fireworkCenterY + Math.sin(e * fireworkOneRotationAngle) * (fireworkLayerNumber * fireworkOneRadiusDistance))), t.setAttribute("r", fireworkDotRadius), t.setAttribute("fill", "#ffffff"), fireworkSvgArray[drawFireworkCounter].appendChild(t) } } else fireworkLayerNumber = 0, clearInterval(drawOneLayerOfFireworkTimer), makeFireworkDisappear(drawFireworkCounter), drawFireworkCounter += 1 } 

function makeFireworkDisappear(e) { 
    $(fireworkArray[e]).fadeTo(1e3, 0) } function resetFireworkSvg() { for (var e = 0; e < fireworkArray.length; e++)$(fireworkSvgArray[e]).empty(), $(fireworkArray[e]).fadeTo(0, 1) } 

function printResizeText() { } 

function printScrollSwipeText() { 

} 
let blinkAIEyesTimer
let contentDiv = document.getElementById("content")
let pageDiv = document.getElementById("page")
let aiContainerDiv = document.getElementById("ai-container")
let aiDiv = document.getElementById("ai")
let aiFramesDiv = document.getElementById("ai-slides")
let aiEyesCloseDiv = document.getElementById("ai-eyes-close") 
let bannersContainerDiv = document.getElementById("banners-container") 
let isPreloadShiftUpAnimationFinish = !1
let canFinishShiftUpHorizontalLayersAfterEverythingLoaded = !0
let splashContainerDiv = document.getElementById("splash-container")
let balloonDiv = document.getElementById("balloon")
let groundAndGrassContainer1Div = document.getElementById("ground-and-grass-container-1")
let elevation1Div = document.getElementById("elevation-1")
let elevation2Div = document.getElementById("elevation-2")
let layerHorizontalArray = new Array
let layerVerticalArray = new Array, gapBetweenContactCloudAndBannersContainer = 400
let layerHorizontalSpeedArray = new Array
let layerVerticalSpeedArray = new Array
let sea1Div = document.getElementById("sea-1")
let seaFloorDiv = document.getElementById("sea-floor")
let seaFloorFrontObjectArray = new Array
let seaFloorBackObjectArray = new Array
let about1ContainerDiv = document.getElementById("plants-container") 
let plantLine1Div = document.getElementById("plant-line-1")
let plantLine2Div = document.getElementById("plant-line-2")
let plantArray = new Array
let plantTargetTopObjectArray = new Array; 

plantTargetTopObjectArray.push(plantLine1Div, plantLine1Div, plantLine2Div, plantLine2Div); 

let canAnimatePlantInformation
let about2ContainerDiv = document.getElementById("buildings-container")
let buildingTargetLeft1 = 0
let buildingTargetLeft2 = 305
let buildingTargetLeft3 = 710
let buildingEarlyPosition1 = 795
let buildingEarlyPosition2 = 1100
let buildingEarlyPosition3 = 1505
let buildingArray = new Array
let buildingTargetLeftArray = new Array; 

buildingTargetLeftArray.push(buildingTargetLeft1, buildingTargetLeft2, buildingTargetLeft3); 

let buildingEarlyPositionArray = new Array; 
buildingEarlyPositionArray.push(buildingEarlyPosition1, buildingEarlyPosition2, buildingEarlyPosition3); 
let canAnimateBuildingInformation 
let buildingLegsTimer
let buildingBlinkTimer
let animateRobotHandsTimer 
let spinRobotHandsTimer
let animateSquidHandsTimer
let moveSquidHandsTimer
let animateAlienHandsTimer
let alienSteerPreviousAngle
let canAnimateBossInformation
let canAnimateRobotInformation
let canAnimateSquidInformation
let canAnimateAlienInformation
let bubbleTimer
let shiftUpLayerHorizontalDistance
let shiftUpLayerHorizontalTimer
let shiftDownLayerHorizontalTimer
let blinkSeaAnimalsTimer
let canAnimateFishInformation
let buildingLegArray = new Array
let buildingCounter = 0
let buildingEnemyFaceEyeArray = new Array
let buildingLegContainerArray = new Array
let buildingLegContainer1Div = document.getElementById("building-leg-container-1")
let buildingLegContainer2Div = document.getElementById("building-leg-container-2")
let buildingLegContainer3Div = document.getElementById("building-leg-container-3")
let buildingLegFrameArray = new Array
let building1LegFrameDiv = document.getElementById("building-1-leg-frame")
let building2LegFrameDiv = document.getElementById("building-2-leg-frame")
let building3LegFrameDiv = document.getElementById("building-3-leg-frame")
let experience1ContainerDiv = document.getElementById("experience-1-container")
let experience2ContainerDiv = document.getElementById("experience-2-container")
let experience3ContainerDiv = document.getElementById("experience-3-container")
let experienceTextContainerArray = new Array
let chainBlockAndStringContainerArray = new Array
let experienceTextContainerDistanceFromFloor = 185
let robotDiv = document.getElementById("robot")
let changeRobotHandsCounter = 0
let robotHandLeftDiv = document.getElementById("robot-hand-left")
let robotHandRightDiv = document.getElementById("robot-hand-right")
let robotHandChildrenLength = $(robotHandLeftDiv).children().length
let squidDiv = document.getElementById("squid"), squidHandCloseArray = new Array
let squidHandOpenArray = new Array, openAndCloseSquidHandsCounter = 0
let alienDiv = document.getElementById("alien")
let alienSteerDiv = document.getElementById("alien-steer")
let alienSteerAngle = 0
let alienSteerAngleLimit = 15
let alienSteerAngleIncrement = 5
let piechartRobotFrontDiv = document.getElementById("piechart-robot-front")
let piechartRobotTextGraphic1Div = document.getElementById("piechart-robot-text-graphic-1")
let piechartRobotTextGraphic2Div = document.getElementById("piechart-robot-text-graphic-2")
let piechartRobotTextAnimation1Div = document.getElementById("piechart-robot-text-animation-1")
let piechartRobotTextAnimation2Div = document.getElementById("piechart-robot-text-animation-2")
let piechartRobotTextCode1Div = document.getElementById("piechart-robot-text-code-1")
let piechartRobotTextCode2Div = document.getElementById("piechart-robot-text-code-2")
let piechartSquidFrontDiv = document.getElementById("piechart-squid-front")
let piechartSquidTextGraphic1Div = document.getElementById("piechart-squid-text-graphic-1")
let piechartSquidTextGraphic2Div = document.getElementById("piechart-squid-text-graphic-2")
let piechartSquidTextAnimation1Div = document.getElementById("piechart-squid-text-animation-1")
let piechartSquidTextAnimation2Div = document.getElementById("piechart-squid-text-animation-2")
let piechartSquidTextCode1Div = document.getElementById("piechart-squid-text-code-1") 
let piechartSquidTextCode2Div = document.getElementById("piechart-squid-text-code-2")
let piechartAlienFrontDiv = document.getElementById("piechart-alien-front")
let piechartAlienTextGraphic1Div = document.getElementById("piechart-alien-text-graphic-1")
let piechartAlienTextGraphic2Div = document.getElementById("piechart-alien-text-graphic-2")
let piechartAlienTextAnimation1Div = document.getElementById("piechart-alien-text-animation-1")
let piechartAlienTextAnimation2Div = document.getElementById("piechart-alien-text-animation-2")
let piechartAlienTextCode1Div = document.getElementById("piechart-alien-text-code-1")
let piechartAlienTextCode2Div = document.getElementById("piechart-alien-text-code-2")
let bubbleDiv = document.getElementById("bubble")
let shiftUpDownLayerHorizontalIncrement = 40
let shiftUpDownLayerHorizontalInterval = 40
let seaAnimalSwimDistance = 900
let skill1ContainerDiv = document.getElementById("skill-1-container")
let fishArray = new Array 
let fishEyeArray = new Array 
let isFishStillAnimating = !1
let fishAnimateNumber = 0
let numberOfFishInEachRowArray = new Array;

numberOfFishInEachRowArray.push(5, 5, 3, 4); 

let canAnimateCrabInformation 
let skill2ContainerDiv = document.getElementById("skill-2-container")

let crabArray = new Array
let crabEyeArray = new Array
let isCrabStillAnimating = !1
let crabAnimateNumber = 0
let numberOfCrabInEachRowArray = new Array; 

numberOfCrabInEachRowArray.push(5, 5, 4, 3); 

let canAnimateTurtleInformation
let skill3ContainerDiv = document.getElementById("skill-3-container")
let turtleArray = new Array
let turtleEyeArray = new Array
let isTurtleStillAnimating = !1
let turtleAnimateNumber = 0
let numberOfTurtleInEachRowArray = new Array; 

numberOfTurtleInEachRowArray.push(3, 2, 2, 2); 

let isAIJumping 
let isAIFalling
let swimUpHeight
let layersMovement
let aiRightEdge
let aiLeftEdge
let aiMaxHorizontalDistance
let canAnimateAIRunSwim
let aiStartFrame
let aiStopFrame 
let shiftAIFrameTimer 
let pageVerticalPositionWhenAnimateAI1
let pageVerticalPositionWhenAnimateAI2
let canAnimateNbaInformation
let nbaBoardsCounter
let nbaBoardsAnimationTimer
let nbaPlayerCounter
let nbaPlayerTimer
let blinkNbaPlayerTimer
let canAnimateSocialContainer
let happyAITimer
let scrollOrSwipeTextContainerTimer
let waterfallTimer
let drawFireworkTimer
let fireworkCenterX
let fireworkCenterY
let fireworkOneRadiusDistance
let fireworkOneRotationAngle
let drawOneLayerOfFireworkTimer
let pageVerticalPosition = 0
let pageVerticalPositionOnTouch = 0
let previousPageVerticalPosition = 0
let deltaPageVerticalPosition = 0
let isAISwimming = !1
let isAIBelowSeaLevel = !1
let elevationArray = new Array
let elevationNumberBelowAI = null
let distanceBetweenAIAndBalloon = 150
let counter = 0
let switcher = 1
let aiStaticFrame = 0
let aiStartRunFrame = 1
let aiStopRunFrame = 2
let aiStartSwimFrame = 3
let aiStopSwimFrame = 4
let aiSwimDownFrame = 5
let aiStartJumpFrame = 6
let aiStopJumpFrame = 7
let aiOneFrameWidth = 200
let shiftAIFrameTimeInterval = 200
let minimumVerticalDistanceToTriggerAISwimDownFrame = 100
let nbaBoardArray = new Array
let about3ContainerDiv = document.getElementById("nba-container")
let nbaPlayerDiv = document.getElementById("nba-player")
let nbaPlayerContainerDiv = document.getElementById("nba-player-container")
let nbaPlayerFrameDiv = document.getElementById("nba-player-frame")
let nbaRimContainerDiv = document.getElementById("nba-rim-container")
let nbaBallDiv = document.getElementById("nba-ball")
let nbaPlayerEyesDiv = document.getElementById("nba-player-eyes")
let contactContainerDiv = document.getElementById("contact-container")
let socialContainerDiv = document.getElementById("social-container")
let isAIHappy = !1
let scrollOrSwipeTextContainer1Div = document.getElementById("scroll-or-swipe-text-container-1")
let scrollOrSwipeTextContainer2Div = document.getElementById("scroll-or-swipe-text-container-2")
let canHideScrollOrSwipeTextContainer = !0
let canAnimateScrollOrSwipeTextContainer = !0
let contactConfirmationContainerArray = new Array
let emailAddressDiv = document.getElementById("email-address")
let emailSubjectDiv = document.getElementById("email-subject")
let emailMessageDiv = document.getElementById("email-message")
let isContactConfirmationContainerVisible = !0
let waterfall1Div = document.getElementById("waterfall-1")
let waterfall2Div = document.getElementById("waterfall-2")
let touchStartX = 0
let touchCurrentX = 0
let touchEndX = 0
let fireworksContainerDiv = document.getElementById("fireworks-container")
let fireworkArray = new Array
let fireworkSvgArray = new Array
let cArray = new Array
let drawFireworkCounter = 0
let fireworkRowNumber = 8
let fireworkColumnNumber = 16
let fireworkLayerNumber = 0
let fireworkDotRadius = 5
let canDrawManyFireworks = !0; 

disableIsAIJumpingAndFalling(); 

let landInformationContainerArray = new Array; 

landInformationContainerArray.push(about1ContainerDiv, about2ContainerDiv, about3ContainerDiv, experience1ContainerDiv, experience2ContainerDiv, experience3ContainerDiv); 

let canScrollOrSwipe
let seaInformationContainerArray = new Array; 

seaInformationContainerArray.push(skill1ContainerDiv, skill2ContainerDiv, skill3ContainerDiv)

setAllNbaCounter()

disableScrollOrSwipe()

$(window).on("beforeunload", function () { $(window).scrollTop(0) })
window.onload = function () { "computer" != deviceName && initTouchEvents(), storeDivs(), setFrontLayerVerticalHeight(), setBannersContainerVerticalPosition(), shiftUpPreloader(), showContainer(), initVariablesAfterShowContainer(), shiftUpHorizontalLayersAfterEverythingLoaded(), disableAnimateAIRunSwim(), resetVariables(), setPageHeight(), setLayerSpeed(), positionVerticalLayersHorizontally(), positionBalloonAndAIContainerHorizontally(), positionBalloonVertically(), positionContactContainer(), positionFireworksContainer(), resetFunctions(), positionSplashContainer(), setAILeftAndRightEdge(), positionContactConfirmationContainer(), hideContactConfirmationContainer(), hideAIEyesClose(), animateAIEyes(), animateWaterfall(), positionSeaFloorObjectsVertically(), openSquidHands(), hideBubble(), setRobotHandsToDefault(), createFireworkSvg(), appendFireworkSvgToContainer() }
window.onscroll = function (e) { 1 == canScrollOrSwipe && (detectPageVerticalPosition(), runTheseFunctionsAfterScrollOrSwipe()) }, window.onresize = function (e) { setFrontLayerVerticalHeight(), setBannersContainerVerticalPosition(), setPageHeight(), detectPageVerticalPosition(), orientAI(), setLayerSpeed(), moveLayers(), setAILeftAndRightEdge(), shiftUpDownHorizontalLayersOnResize(), animateInformationAndEnemiesElements(), positionSplashContainer(), positionAIContainerVertically(), positionBalloonVertically(), positionSocialContainer(), positionPlants(), hideContactConfirmationContainer(), positionContactConfirmationContainer(), positionExperienceTextContainer(), positionChainBlockAndStringContainer(), positionSeaFloorObjectsVertically(), enableScrollOrSwipe(), printResizeText() }
$(window).on("orientationchange", orientationChangeHandler);